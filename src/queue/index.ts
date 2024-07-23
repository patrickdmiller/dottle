import { Dot } from "../proto/dot";
import { Dottle } from "../proto/dottle";
class Queue {

  //
  getDottles() {

  }

  pop(): Dot {
    let dot = Dot.create();
    dot.id = "abc123";
    return dot;
  }


}