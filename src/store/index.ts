import { Dot } from "../proto/gen/dot";
import { Dottle } from "../proto/gen/dottle";

export 
enum KEYS {
  "DOTTLES_ID_LIST" = `$DOT.DOTTLES_ID_LIST`,
  "DOTTLE" = '$DOT.DOTTLE'
}

export function makeId (key : KEYS, value : any | null) : string {
  if(value === null){
    return key;
  }
  return key + ":" + value;
}
export interface Store{
  connect() : void;
  getDottleIds() : Promise<Dottle['id'][]>;
  getDottle(id: Dottle['id']) : Promise<Dottle>;
  setDottle(dottle: Dottle) : Promise<any>;
}