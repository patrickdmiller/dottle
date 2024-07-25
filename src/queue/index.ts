import { Dot } from "../proto/dot";
import { Dottle } from "../proto/dottle";
import {Redis} from "../store/redis";
export class Queue {
  store : Redis;
  constructor(store: Redis){
    this.store = store;
  }
  //get a list of all dottles from redis
  getDottles() {
    this.store.client.get();
  }

  // For a given Dottle, pop the highest priority dot
  popDot(dottleId : Dottle['id']): Dot {
    let dot = Dot.create();
    dot.id = "abc123";
    return dot;
  }

  // Guarantee that a Dot succeeded by client
  finishDot(){}

  

}

// run
const q = new Queue(new Redis());