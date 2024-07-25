// @generated by protobuf-ts 2.9.4 with parameter server_grpc1,client_grpc1
// @generated from protobuf file "dot.proto" (package "dottle", syntax proto3)
// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { Timestamp } from "./google/protobuf/timestamp";
/**
 * @generated from protobuf message dottle.Dot
 */
export interface Dot {
    /**
     * @generated from protobuf field: string id = 1;
     */
    id: string;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp created = 2;
     */
    created?: Timestamp;
    /**
     * @generated from protobuf field: int32 priority = 3;
     */
    priority: number;
    /**
     * @generated from protobuf oneof: type
     */
    type: {
        oneofKind: "container";
        /**
         * @generated from protobuf field: dottle.Container container = 4;
         */
        container: Container;
    } | {
        oneofKind: undefined;
    };
    /**
     * @generated from protobuf field: dottle.JobInfo job_info = 5;
     */
    jobInfo?: JobInfo;
}
/**
 * @generated from protobuf message dottle.Container
 */
export interface Container {
    /**
     * @generated from protobuf field: string uri = 1;
     */
    uri: string;
    /**
     * @generated from protobuf field: string command = 2;
     */
    command: string;
    /**
     * @generated from protobuf field: repeated dottle.Parameter parameters = 3;
     */
    parameters: Parameter[];
}
/**
 * @generated from protobuf message dottle.Parameter
 */
export interface Parameter {
    /**
     * @generated from protobuf field: string key = 1;
     */
    key: string;
    /**
     * @generated from protobuf oneof: value
     */
    value: {
        oneofKind: "stringValue";
        /**
         * @generated from protobuf field: string string_value = 2;
         */
        stringValue: string;
    } | {
        oneofKind: "intValue";
        /**
         * @generated from protobuf field: int64 int_value = 3;
         */
        intValue: bigint;
    } | {
        oneofKind: undefined;
    };
}
/**
 * @generated from protobuf message dottle.JobInfo
 */
export interface JobInfo {
    /**
     * @generated from protobuf field: dottle.JobInfo.Status status = 1;
     */
    status: JobInfo_Status;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp updated = 2;
     */
    updated?: Timestamp;
    /**
     * @generated from protobuf field: int32 retry_count = 3;
     */
    retryCount: number;
}
/**
 * @generated from protobuf enum dottle.JobInfo.Status
 */
export enum JobInfo_Status {
    /**
     * @generated from protobuf enum value: UNSET = 0;
     */
    UNSET = 0,
    /**
     * @generated from protobuf enum value: QUEUED = 1;
     */
    QUEUED = 1,
    /**
     * @generated from protobuf enum value: PULLED = 2;
     */
    PULLED = 2,
    /**
     * @generated from protobuf enum value: PROCESSING = 3;
     */
    PROCESSING = 3,
    /**
     * @generated from protobuf enum value: FINISHED = 4;
     */
    FINISHED = 4,
    /**
     * @generated from protobuf enum value: ERROR = 5;
     */
    ERROR = 5
}
// @generated message type with reflection information, may provide speed optimized methods
class Dot$Type extends MessageType<Dot> {
    constructor() {
        super("dottle.Dot", [
            { no: 1, name: "id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "created", kind: "message", T: () => Timestamp },
            { no: 3, name: "priority", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 4, name: "container", kind: "message", oneof: "type", T: () => Container },
            { no: 5, name: "job_info", kind: "message", T: () => JobInfo }
        ]);
    }
    create(value?: PartialMessage<Dot>): Dot {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.id = "";
        message.priority = 0;
        message.type = { oneofKind: undefined };
        if (value !== undefined)
            reflectionMergePartial<Dot>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Dot): Dot {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string id */ 1:
                    message.id = reader.string();
                    break;
                case /* google.protobuf.Timestamp created */ 2:
                    message.created = Timestamp.internalBinaryRead(reader, reader.uint32(), options, message.created);
                    break;
                case /* int32 priority */ 3:
                    message.priority = reader.int32();
                    break;
                case /* dottle.Container container */ 4:
                    message.type = {
                        oneofKind: "container",
                        container: Container.internalBinaryRead(reader, reader.uint32(), options, (message.type as any).container)
                    };
                    break;
                case /* dottle.JobInfo job_info */ 5:
                    message.jobInfo = JobInfo.internalBinaryRead(reader, reader.uint32(), options, message.jobInfo);
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
    internalBinaryWrite(message: Dot, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string id = 1; */
        if (message.id !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.id);
        /* google.protobuf.Timestamp created = 2; */
        if (message.created)
            Timestamp.internalBinaryWrite(message.created, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        /* int32 priority = 3; */
        if (message.priority !== 0)
            writer.tag(3, WireType.Varint).int32(message.priority);
        /* dottle.Container container = 4; */
        if (message.type.oneofKind === "container")
            Container.internalBinaryWrite(message.type.container, writer.tag(4, WireType.LengthDelimited).fork(), options).join();
        /* dottle.JobInfo job_info = 5; */
        if (message.jobInfo)
            JobInfo.internalBinaryWrite(message.jobInfo, writer.tag(5, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message dottle.Dot
 */
export const Dot = new Dot$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Container$Type extends MessageType<Container> {
    constructor() {
        super("dottle.Container", [
            { no: 1, name: "uri", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "command", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "parameters", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Parameter }
        ]);
    }
    create(value?: PartialMessage<Container>): Container {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.uri = "";
        message.command = "";
        message.parameters = [];
        if (value !== undefined)
            reflectionMergePartial<Container>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Container): Container {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string uri */ 1:
                    message.uri = reader.string();
                    break;
                case /* string command */ 2:
                    message.command = reader.string();
                    break;
                case /* repeated dottle.Parameter parameters */ 3:
                    message.parameters.push(Parameter.internalBinaryRead(reader, reader.uint32(), options));
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
    internalBinaryWrite(message: Container, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string uri = 1; */
        if (message.uri !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.uri);
        /* string command = 2; */
        if (message.command !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.command);
        /* repeated dottle.Parameter parameters = 3; */
        for (let i = 0; i < message.parameters.length; i++)
            Parameter.internalBinaryWrite(message.parameters[i], writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message dottle.Container
 */
export const Container = new Container$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Parameter$Type extends MessageType<Parameter> {
    constructor() {
        super("dottle.Parameter", [
            { no: 1, name: "key", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "string_value", kind: "scalar", oneof: "value", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "int_value", kind: "scalar", oneof: "value", T: 3 /*ScalarType.INT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value?: PartialMessage<Parameter>): Parameter {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.key = "";
        message.value = { oneofKind: undefined };
        if (value !== undefined)
            reflectionMergePartial<Parameter>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Parameter): Parameter {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string key */ 1:
                    message.key = reader.string();
                    break;
                case /* string string_value */ 2:
                    message.value = {
                        oneofKind: "stringValue",
                        stringValue: reader.string()
                    };
                    break;
                case /* int64 int_value */ 3:
                    message.value = {
                        oneofKind: "intValue",
                        intValue: reader.int64().toBigInt()
                    };
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
    internalBinaryWrite(message: Parameter, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string key = 1; */
        if (message.key !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.key);
        /* string string_value = 2; */
        if (message.value.oneofKind === "stringValue")
            writer.tag(2, WireType.LengthDelimited).string(message.value.stringValue);
        /* int64 int_value = 3; */
        if (message.value.oneofKind === "intValue")
            writer.tag(3, WireType.Varint).int64(message.value.intValue);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message dottle.Parameter
 */
export const Parameter = new Parameter$Type();
// @generated message type with reflection information, may provide speed optimized methods
class JobInfo$Type extends MessageType<JobInfo> {
    constructor() {
        super("dottle.JobInfo", [
            { no: 1, name: "status", kind: "enum", T: () => ["dottle.JobInfo.Status", JobInfo_Status] },
            { no: 2, name: "updated", kind: "message", T: () => Timestamp },
            { no: 3, name: "retry_count", kind: "scalar", T: 5 /*ScalarType.INT32*/ }
        ]);
    }
    create(value?: PartialMessage<JobInfo>): JobInfo {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.status = 0;
        message.retryCount = 0;
        if (value !== undefined)
            reflectionMergePartial<JobInfo>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: JobInfo): JobInfo {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* dottle.JobInfo.Status status */ 1:
                    message.status = reader.int32();
                    break;
                case /* google.protobuf.Timestamp updated */ 2:
                    message.updated = Timestamp.internalBinaryRead(reader, reader.uint32(), options, message.updated);
                    break;
                case /* int32 retry_count */ 3:
                    message.retryCount = reader.int32();
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
    internalBinaryWrite(message: JobInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* dottle.JobInfo.Status status = 1; */
        if (message.status !== 0)
            writer.tag(1, WireType.Varint).int32(message.status);
        /* google.protobuf.Timestamp updated = 2; */
        if (message.updated)
            Timestamp.internalBinaryWrite(message.updated, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        /* int32 retry_count = 3; */
        if (message.retryCount !== 0)
            writer.tag(3, WireType.Varint).int32(message.retryCount);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message dottle.JobInfo
 */
export const JobInfo = new JobInfo$Type();
