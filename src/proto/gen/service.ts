// @generated by protobuf-ts 2.9.4 with parameter server_grpc1,client_grpc1
// @generated from protobuf file "service.proto" (package "dottle", syntax proto3)
// tslint:disable
import { ServiceType } from "@protobuf-ts/runtime-rpc";
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { DotToProcess } from "./dot";
import { Client } from "./client";
import { Dottle } from "./dottle";
/**
 * @generated from protobuf message dottle.TestRequest
 */
export interface TestRequest {
    /**
     * @generated from protobuf field: string id = 1;
     */
    id: string;
    /**
     * @generated from protobuf field: string message = 2;
     */
    message: string;
}
/**
 * @generated from protobuf message dottle.TestResponse
 */
export interface TestResponse {
    /**
     * @generated from protobuf field: string message = 1;
     */
    message: string;
}
/**
 * @generated from protobuf message dottle.CreateDottleRequest
 */
export interface CreateDottleRequest {
    /**
     * @generated from protobuf field: dottle.Dottle dottle = 1;
     */
    dottle?: Dottle;
}
/**
 * @generated from protobuf message dottle.CreateDottleResponse
 */
export interface CreateDottleResponse {
}
/**
 * @generated from protobuf message dottle.GetDotToProcessRequest
 */
export interface GetDotToProcessRequest {
    /**
     * @generated from protobuf field: dottle.Client client = 1;
     */
    client?: Client;
}
/**
 * @generated from protobuf message dottle.GetDotToProcessResponse
 */
export interface GetDotToProcessResponse {
    /**
     * @generated from protobuf field: dottle.DotToProcess dotToProcess = 1;
     */
    dotToProcess?: DotToProcess;
}
/**
 * @generated from protobuf message dottle.FinishDotProcessRequest
 */
export interface FinishDotProcessRequest {
    /**
     * @generated from protobuf field: dottle.Client client = 1;
     */
    client?: Client;
    /**
     * @generated from protobuf field: string dottle_id = 2;
     */
    dottleId: string;
    /**
     * @generated from protobuf field: string dot_id = 3;
     */
    dotId: string;
}
/**
 * @generated from protobuf message dottle.FinishDotProcessResponse
 */
export interface FinishDotProcessResponse {
}
// @generated message type with reflection information, may provide speed optimized methods
class TestRequest$Type extends MessageType<TestRequest> {
    constructor() {
        super("dottle.TestRequest", [
            { no: 1, name: "id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "message", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<TestRequest>): TestRequest {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.id = "";
        message.message = "";
        if (value !== undefined)
            reflectionMergePartial<TestRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: TestRequest): TestRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string id */ 1:
                    message.id = reader.string();
                    break;
                case /* string message */ 2:
                    message.message = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: TestRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string id = 1; */
        if (message.id !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.id);
        /* string message = 2; */
        if (message.message !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.message);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message dottle.TestRequest
 */
export const TestRequest = new TestRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class TestResponse$Type extends MessageType<TestResponse> {
    constructor() {
        super("dottle.TestResponse", [
            { no: 1, name: "message", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<TestResponse>): TestResponse {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.message = "";
        if (value !== undefined)
            reflectionMergePartial<TestResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: TestResponse): TestResponse {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string message */ 1:
                    message.message = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: TestResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string message = 1; */
        if (message.message !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.message);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message dottle.TestResponse
 */
export const TestResponse = new TestResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CreateDottleRequest$Type extends MessageType<CreateDottleRequest> {
    constructor() {
        super("dottle.CreateDottleRequest", [
            { no: 1, name: "dottle", kind: "message", T: () => Dottle }
        ]);
    }
    create(value?: PartialMessage<CreateDottleRequest>): CreateDottleRequest {
        const message = globalThis.Object.create((this.messagePrototype!));
        if (value !== undefined)
            reflectionMergePartial<CreateDottleRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CreateDottleRequest): CreateDottleRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* dottle.Dottle dottle */ 1:
                    message.dottle = Dottle.internalBinaryRead(reader, reader.uint32(), options, message.dottle);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: CreateDottleRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* dottle.Dottle dottle = 1; */
        if (message.dottle)
            Dottle.internalBinaryWrite(message.dottle, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message dottle.CreateDottleRequest
 */
export const CreateDottleRequest = new CreateDottleRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CreateDottleResponse$Type extends MessageType<CreateDottleResponse> {
    constructor() {
        super("dottle.CreateDottleResponse", []);
    }
    create(value?: PartialMessage<CreateDottleResponse>): CreateDottleResponse {
        const message = globalThis.Object.create((this.messagePrototype!));
        if (value !== undefined)
            reflectionMergePartial<CreateDottleResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CreateDottleResponse): CreateDottleResponse {
        return target ?? this.create();
    }
    internalBinaryWrite(message: CreateDottleResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message dottle.CreateDottleResponse
 */
export const CreateDottleResponse = new CreateDottleResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetDotToProcessRequest$Type extends MessageType<GetDotToProcessRequest> {
    constructor() {
        super("dottle.GetDotToProcessRequest", [
            { no: 1, name: "client", kind: "message", T: () => Client }
        ]);
    }
    create(value?: PartialMessage<GetDotToProcessRequest>): GetDotToProcessRequest {
        const message = globalThis.Object.create((this.messagePrototype!));
        if (value !== undefined)
            reflectionMergePartial<GetDotToProcessRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetDotToProcessRequest): GetDotToProcessRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* dottle.Client client */ 1:
                    message.client = Client.internalBinaryRead(reader, reader.uint32(), options, message.client);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: GetDotToProcessRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* dottle.Client client = 1; */
        if (message.client)
            Client.internalBinaryWrite(message.client, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message dottle.GetDotToProcessRequest
 */
export const GetDotToProcessRequest = new GetDotToProcessRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetDotToProcessResponse$Type extends MessageType<GetDotToProcessResponse> {
    constructor() {
        super("dottle.GetDotToProcessResponse", [
            { no: 1, name: "dotToProcess", kind: "message", T: () => DotToProcess }
        ]);
    }
    create(value?: PartialMessage<GetDotToProcessResponse>): GetDotToProcessResponse {
        const message = globalThis.Object.create((this.messagePrototype!));
        if (value !== undefined)
            reflectionMergePartial<GetDotToProcessResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetDotToProcessResponse): GetDotToProcessResponse {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* dottle.DotToProcess dotToProcess */ 1:
                    message.dotToProcess = DotToProcess.internalBinaryRead(reader, reader.uint32(), options, message.dotToProcess);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: GetDotToProcessResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* dottle.DotToProcess dotToProcess = 1; */
        if (message.dotToProcess)
            DotToProcess.internalBinaryWrite(message.dotToProcess, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message dottle.GetDotToProcessResponse
 */
export const GetDotToProcessResponse = new GetDotToProcessResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class FinishDotProcessRequest$Type extends MessageType<FinishDotProcessRequest> {
    constructor() {
        super("dottle.FinishDotProcessRequest", [
            { no: 1, name: "client", kind: "message", T: () => Client },
            { no: 2, name: "dottle_id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "dot_id", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<FinishDotProcessRequest>): FinishDotProcessRequest {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.dottleId = "";
        message.dotId = "";
        if (value !== undefined)
            reflectionMergePartial<FinishDotProcessRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: FinishDotProcessRequest): FinishDotProcessRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* dottle.Client client */ 1:
                    message.client = Client.internalBinaryRead(reader, reader.uint32(), options, message.client);
                    break;
                case /* string dottle_id */ 2:
                    message.dottleId = reader.string();
                    break;
                case /* string dot_id */ 3:
                    message.dotId = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: FinishDotProcessRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* dottle.Client client = 1; */
        if (message.client)
            Client.internalBinaryWrite(message.client, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* string dottle_id = 2; */
        if (message.dottleId !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.dottleId);
        /* string dot_id = 3; */
        if (message.dotId !== "")
            writer.tag(3, WireType.LengthDelimited).string(message.dotId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message dottle.FinishDotProcessRequest
 */
export const FinishDotProcessRequest = new FinishDotProcessRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class FinishDotProcessResponse$Type extends MessageType<FinishDotProcessResponse> {
    constructor() {
        super("dottle.FinishDotProcessResponse", []);
    }
    create(value?: PartialMessage<FinishDotProcessResponse>): FinishDotProcessResponse {
        const message = globalThis.Object.create((this.messagePrototype!));
        if (value !== undefined)
            reflectionMergePartial<FinishDotProcessResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: FinishDotProcessResponse): FinishDotProcessResponse {
        return target ?? this.create();
    }
    internalBinaryWrite(message: FinishDotProcessResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message dottle.FinishDotProcessResponse
 */
export const FinishDotProcessResponse = new FinishDotProcessResponse$Type();
/**
 * @generated ServiceType for protobuf service dottle.CoordinatorService
 */
export const CoordinatorService = new ServiceType("dottle.CoordinatorService", [
    { name: "Test", options: {}, I: TestRequest, O: TestResponse },
    { name: "CreateDottle", options: {}, I: CreateDottleRequest, O: CreateDottleResponse },
    { name: "GetDotToProcess", options: {}, I: GetDotToProcessRequest, O: GetDotToProcessResponse },
    { name: "FinishDotProcess", options: {}, I: FinishDotProcessRequest, O: FinishDotProcessResponse }
]);
