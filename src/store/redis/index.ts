import {Store} from '../';
import { createClient, RedisClientType } from 'redis';

// TODO : create store interface.
export class Redis implements Store {
  client? : RedisClientType;
  ready : boolean = false;

  constructor(){
    this.connect();
  }

  async connect(){
    if(!this.ready){
      this.client = createClient();
      await this.client.connect();
      this.ready = true;
    }
    console.log("* ready")
  }

}