import { Dot, DotQueued } from "../proto/gen/dot";
import { Dottle } from "../proto/gen/dottle";

export 
enum KEYS {
  "DOTTLES_ID_LIST" = "$DOT.DOTTLES_ID_LIST",
  "DOTTLE" = "$DOT.DOTTLE",
  "DOT" = "$DOT.DOT",
  "DOTS_TO_PROCESS" = "$DOT.DOTS_TO_PROCESS",
  "DOTS_IN_PROCESS" = "$DOT.DOTS_IN_PROCESS"
}

export function makeId (key : KEYS, value : any | null = null) : string {
  if(value === null){
    return key;
  }
  return key + ":" + value;
}

export function makeDotId (dottleId : Dottle['id'], dotId : Dot['id']) : string {
  return KEYS.DOT + ":" + dottleId + ":" + dotId;
}

export function toStore(obj: Dot | Dottle | DotQueued) : string{
  console.log("TOSTORE")
  if(Dot.is(obj)){
    return Buffer.from(Dot.toBinary(obj)).toString('base64');
  }
  if(Dottle.is(obj)){
    return Buffer.from(Dottle.toBinary(obj)).toString('base64');
  }
  if(DotQueued.is(obj)){
    return Buffer.from(DotQueued.toBinary(obj)).toString('base64');
  }

  throw new Error("toStore: no obj passed")
}

export function toStoreDot(obj: Dot) : string{
  return toStore(obj);
}

export function toStoreDottle(obj:Dottle) : string {
  return toStore(obj);
}

export function toStoreDotQueued(obj:DotQueued) : string{
  return toStore(obj);
}

export function fromStore(raw: string, type: typeof Dot | typeof Dottle | typeof DotQueued) : Dot | Dottle | DotQueued{
  switch(type){
    case Dot:
      return Dot.fromBinary(Buffer.from(raw, 'base64')) as Dot;
    case Dottle:
      return Dottle.fromBinary(Buffer.from(raw, 'base64')) as Dottle;
    case DotQueued:
      return DotQueued.fromBinary(Buffer.from(raw, 'base64')) as DotQueued;
  }
  throw new Error("fromStore: no obj passed")
}

export function fromStoreDot(raw: string) : Dot {
  return fromStore(raw, Dot) as Dot;
}

export function fromStoreDottle(raw: string) : Dottle {
  return fromStore(raw, Dottle) as Dottle;
}

export function fromStoreDotQueued(raw: string) : DotQueued {
  return fromStore(raw, DotQueued) as DotQueued;
}

export interface Store{
  getDottleIds() : Promise<Dottle['id'][]>;
  getDottle(id: Dottle['id']) : Promise<Dottle|null>;
  addDottle(dottle: Dottle) : Promise<Dottle>;
  addDot(dot: Dot, dottleId: string, score: number): Promise<Dot>;
  getNextDotForProcess(): Promise<DotQueued | null>;
}

