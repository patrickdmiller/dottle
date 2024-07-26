import { Store, KEYS, makeId, makeDotId, toStore, fromStore } from '../';
import { createClient } from 'redis'
import { Redis as IORedis } from 'ioredis'
import Redlock from 'redlock'
import { Dot, DotQueued } from "../../proto/gen/dot";
import { Dottle } from "../../proto/gen/dottle";


// TODO : create store interface.
export class Redis implements Store {
  // client: ReturnType<typeof createClient>
  client: IORedis
  redlock: Redlock
  ready: boolean = false;

  constructor() {
    this.client = new IORedis();
    this.redlock = new Redlock([this.client]);
  }

  connect() {

  }

  getDottleIds(): Promise<Dottle['id'][]> {
    if (this.client) {
      return this.client.lrange(makeId(KEYS.DOTTLES_ID_LIST, null), 0, -1);
    }
    return Promise.reject("getDottleIdsredis client is not connected");
  }

  async getDottle(id: Dottle['id']): Promise<Dottle | null> {
    let raw = await this.client.get(makeId(KEYS.DOTTLE, id));
    if (raw) {
      return fromStore(raw, Dottle) as Dottle;
    }
    return null
  }

  async addDot(dot: Dot, dottleId: string, score: number): Promise<Dot>{
    await this.client.zadd(makeId(KEYS.DOTS_TO_PROCESS, null), score, toStore(DotQueued.create({dottleId:dottleId, dot:dot})))
    return dot;
  }
  async addDottle(dottle: Dottle): Promise<any> {
    if (await this.client.get(makeId(KEYS.DOTTLE, dottle.id))) {
      //todo change to warn
      return Promise.reject("dottle already exists. Either delete it or create new")
    }
    console.log("setting: ", makeId(KEYS.DOTTLE, dottle.id))
    await this.client.set(makeId(KEYS.DOTTLE, dottle.id), toStore(dottle))
    // for each dot, add it to dot queue
    let promises: Promise<any>[] = [];
    let score = dottle.priority;
    dottle.dots.forEach(dot => {
      promises.push(this.addDot(dot, dottle.id, dottle.priority));
    });

    await Promise.all(promises);
  }

  async getNextDotForProcess(): Promise<Dot> {
    if (this.client) {
      await this.client
    }
    return Promise.reject("rgetNextDot: edis client is not connected");
  }
}

if (require.main === module) {
  const r = new Redis();
  // r.connect().then(() => {
  //   console.log("c")
  // });
}