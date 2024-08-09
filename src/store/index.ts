import { Dot, DotToProcess, FullDotId } from "../proto/gen/dot";
import { Dottle } from "../proto/gen/dottle";

export enum KEYS {
  "DOTTLES_ID_LIST" = "$DOT.DOTTLES_ID_LIST",
  "DOTTLE" = "$DOT.DOTTLE",
  "DOT" = "$DOT.DOT",
  "DOTS_TO_PROCESS" = "$DOT.DOTS_TO_PROCESS",
  "DOTS_IN_PROCESS" = "$DOT.DOTS_IN_PROCESS",
}

// format is
export function makeId(key: KEYS, value: any | null = null): string {
  if (value === null) {
    return key;
  }
  return key + ":" + value;
}

export function parseFullDotIdString(fullDotIdString: string): FullDotId {
  let parts = fullDotIdString.split(":");
  return FullDotId.create({ dottleId: parts[1], dotId: parts[2] });
}

export function makeFullDotIdString(fullDotId: FullDotId): string {
  return KEYS.DOT + ":" + fullDotId.dottleId + ":" + fullDotId.dotId;
}

export function toStore(obj: Dot | Dottle | DotToProcess): string {
  console.log("TOSTORE");
  if (Dot.is(obj)) {
    return Buffer.from(Dot.toBinary(obj)).toString("base64");
  }
  if (Dottle.is(obj)) {
    return Buffer.from(Dottle.toBinary(obj)).toString("base64");
  }
  if (DotToProcess.is(obj)) {
    return Buffer.from(DotToProcess.toBinary(obj)).toString("base64");
  }

  throw new Error("toStore: no obj passed");
}

export function toStoreDot(obj: Dot): string {
  return toStore(obj);
}

export function toStoreDottle(obj: Dottle): string {
  return toStore(obj);
}

export function toStoreDotToProcess(obj: DotToProcess): string {
  return toStore(obj);
}

export function fromStore(
  raw: string,
  type: typeof Dot | typeof Dottle | typeof DotToProcess
): Dot | Dottle | DotToProcess {
  switch (type) {
    case Dot:
      return Dot.fromBinary(Buffer.from(raw, "base64")) as Dot;
    case Dottle:
      return Dottle.fromBinary(Buffer.from(raw, "base64")) as Dottle;
    case DotToProcess:
      return DotToProcess.fromBinary(Buffer.from(raw, "base64")) as DotToProcess;
  }
  throw new Error("fromStore: no obj passed");
}

export function fromStoreDot(raw: string): Dot {
  return fromStore(raw, Dot) as Dot;
}

export function fromStoreDottle(raw: string): Dottle {
  return fromStore(raw, Dottle) as Dottle;
}

export function fromStoreDotToProcess(raw: string): DotToProcess {
  return fromStore(raw, DotToProcess) as DotToProcess;
}

export interface Store {
  getDottleIds(): Promise<Dottle["id"][]>;
  getDottle(id: Dottle["id"]): Promise<Dottle | null>;
  setDottle(dottle: Dottle): Promise<void>;
  getDotForDottle(dottleId: Dottle["id"], dotId: Dot["id"]): Promise<Dot | null>;
  addDottle(dottle: Dottle): Promise<Dottle>;
  addDotToDotsToProcessQueue(dot: Dot, dottleId: string, score: number): Promise<void>;
  addDotToDotsProcessingQueue(fullDotId: FullDotId): Promise<void>;
  getNextDotToProcess(): Promise<DotToProcess | null>;
  setDotFinishedInDottle(fullDotId: FullDotId): Promise<Dottle | null>;
  finishDotProcess(fullDotId: FullDotId): Promise<Dottle | null>;
}
