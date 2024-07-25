import {Store, KEYS, makeId} from '../';
import { createClient} from 'redis'
import { Dot } from "../../proto/gen/dot";
import { Dottle } from "../../proto/gen/dottle";



// TODO : create store interface.
export class Redis implements Store{
  client? : ReturnType<typeof createClient>
  ready : boolean = false;

  constructor(){
    this.connect();
  }

  // static makeid(key : KEYS, value : any | null){
  //   if(value === null){
  //     return key;
  //   }
  //   return key + ":" + value;
  // }

  async connect(){
    if(!this.ready){
      this.client = createClient();
      await this.client.connect();
      this.ready = true;
    }
    console.log("*redis* ready")
  }

  getDottleIds() : Promise<Dottle['id'][]>{
    if(this.client ){
      return this.client.LRANGE(makeId(KEYS.DOTTLES_ID_LIST, null), 0 , -1);
    }
    return Promise.reject("redis client is not connected");
  }

  async getDottle(id: Dottle['id']) : Promise<Dottle>{
    if(this.client){
      let raw = await this.client.get(makeId(KEYS.DOTTLE, id));
      if(raw){
        return Dottle.decode(new TextEncoder().encode(raw));
      }
    }
    return Promise.reject("redis client is not connected");
  }

  async setDottle(dottle: Dottle) : Promise<any>{
    if(this.client){
      await this.client.set(makeId(KEYS.DOTTLE,dottle.id), new TextDecoder().decode(Dottle.encode(dottle).finish()))
      return Promise.resolve();
    }
    return Promise.reject("redis client is not connected");
  }
}


const r = new Redis();
r.connect().then( ()=>{
  console.log("c")
});
