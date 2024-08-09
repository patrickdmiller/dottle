import { Store, KEYS, makeId,  toStore, fromStore, fromStoreDotToProcess , makeFullDotIdString, parseFullDotIdString } from '../';
import { createClient } from 'redis'
import { Redis as IORedis } from 'ioredis'
import Redlock from 'redlock'
import { Dot, DotToProcess, FullDotId, JobInfo, JobInfo_Status } from "../../proto/gen/dot";
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

  async setDottle(dottle : Dottle, force : boolean = false): Promise<void>{
    if (!force && await this.client.get(makeId(KEYS.DOTTLE, dottle.id))) {
      console.log("need to reject this request")
      //todo change to warn
      return Promise.reject("dottle already exists. Either delete it or create new")
    }
    await this.client.set(makeId(KEYS.DOTTLE, dottle.id), toStore(dottle))
  }

  async getDotForDottle(dottleId:Dottle['id'] , dotId: Dot['id']): Promise<Dot | null> {
    let dottle = await this.getDottle(dottleId);
    if (dottle == null){
      return null;
    }
    // find dot with id
    for(const dot  of dottle?.dots){
      if(dot.id == dotId){
        return dot;
      }
    }
    return Promise.reject(`Dot with id ${dotId} not in Dottle id ${dottleId}`);
  }

  async addDotToDotsToProcessQueue(dot: Dot, dottleId: string, score: number): Promise<void>{
    await this.client.zadd(makeId(KEYS.DOTS_TO_PROCESS), score, makeFullDotIdString(FullDotId.create({dotId: dot.id, dottleId})));

  }

  // add dot to processing queue with timestamp for when added
  async addDotToDotsProcessingQueue(fullDotId: FullDotId): Promise<void> {
    console.log("adding dot" + fullDotId.dotId + "to processing queue")
    await this.client.hset(makeId(KEYS.DOTS_IN_PROCESS), 'id', makeFullDotIdString(fullDotId), 'timestamp', Date.now());
  }

  async addDottle(dottle: Dottle): Promise<any> {
    
    await this.setDottle(dottle);

    // for each dot, add it to dot queue
    let promises: Promise<any>[] = [];
    let score = dottle.priority;
    dottle.dots.forEach(dot => {
      promises.push(this.addDotToDotsToProcessQueue(dot, dottle.id, dottle.priority));
    });

    await Promise.all(promises);
  }

  async getNextDotToProcess(): Promise<DotToProcess| null> {
    if (!this.client) {
      return Promise.reject("getNextDot: edis client is not connected");
    }

    let nextDot = await this.client.zpopmin(makeId(KEYS.DOTS_TO_PROCESS));

    if(nextDot == null || nextDot.length == 0){ 
      // there is no dot.
      return null
    }
    let fullDotIdString = nextDot[0];
    let fullDotId = parseFullDotIdString(fullDotIdString);
    // push to processing queue
    this.addDotToDotsProcessingQueue(fullDotId);
  
    // fetch the dot
    try{
      let dot = await this.getDotForDottle(fullDotId.dottleId, fullDotId.dotId);
      if(dot != null)
        return DotToProcess.create({dottleId: fullDotId.dottleId, dot:dot})
    }catch(e){
      return Promise.reject(e)
    }
    return null;
  }

  async setDotFinishedInDottle(fullDotId : FullDotId) : Promise<Dottle | null> {
    // we should block to be thread safe
    console.log("in setDotFinishedInDottle")
    let dottle = await this.getDottle(fullDotId.dottleId)
    if(dottle == null)
      return null;
    for (const index in dottle.dots){
      if(dottle.dots[index].id == fullDotId.dotId){
        if(dottle.dots[index].jobInfo == null){
          dottle.dots[index].jobInfo = JobInfo.create({})
        }
        dottle.dots[index].jobInfo.status = JobInfo_Status.FINISHED;
        break
      }

    }
    //update the dottle
    await this.setDottle(dottle, true)
    return this.getDottle(dottle.id)
    // return this.setDotFinishedInDottle(fullDotId);

  }

  async finishDotProcess(fullDotId : FullDotId): Promise<Dottle | null> {
    // remove it from processing queue. If it's not in there, we ignore it. Someone else already finished processing it
    // TODO(@patrickdmiller) Should we handle this differently?
    this.client.hdel(KEYS.DOTS_IN_PROCESS, makeFullDotIdString(fullDotId))

    // make sure its not in the toProcess queue
    this.client.zrem(KEYS.DOTS_TO_PROCESS, makeFullDotIdString(fullDotId))

    // return this.ackDotProcessed(fullDotId);
  }
}


if (require.main === module) {
  const r = new Redis();
  // r.connect().then(() => {
  //   console.log("c")
  // });
}