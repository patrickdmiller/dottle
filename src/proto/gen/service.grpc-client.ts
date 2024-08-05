// @generated by protobuf-ts 2.9.4 with parameter server_grpc1,client_grpc1
// @generated from protobuf file "service.proto" (package "dottle", syntax proto3)
// tslint:disable
import { CoordinatorService } from "./service";
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { GetDotToProcessResponse } from "./service";
import type { GetDotToProcessRequest } from "./service";
import type { CreateDottleResponse } from "./service";
import type { CreateDottleRequest } from "./service";
import type { TestResponse } from "./service";
import type { TestRequest } from "./service";
import * as grpc from "@grpc/grpc-js";
/**
 * @generated from protobuf service dottle.CoordinatorService
 */
export interface ICoordinatorServiceClient {
    /**
     * test pin pong
     *
     * @generated from protobuf rpc: Test(dottle.TestRequest) returns (dottle.TestResponse);
     */
    test(input: TestRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (err: grpc.ServiceError | null, value?: TestResponse) => void): grpc.ClientUnaryCall;
    test(input: TestRequest, metadata: grpc.Metadata, callback: (err: grpc.ServiceError | null, value?: TestResponse) => void): grpc.ClientUnaryCall;
    test(input: TestRequest, options: grpc.CallOptions, callback: (err: grpc.ServiceError | null, value?: TestResponse) => void): grpc.ClientUnaryCall;
    test(input: TestRequest, callback: (err: grpc.ServiceError | null, value?: TestResponse) => void): grpc.ClientUnaryCall;
    /**
     * @generated from protobuf rpc: CreateDottle(dottle.CreateDottleRequest) returns (dottle.CreateDottleResponse);
     */
    createDottle(input: CreateDottleRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (err: grpc.ServiceError | null, value?: CreateDottleResponse) => void): grpc.ClientUnaryCall;
    createDottle(input: CreateDottleRequest, metadata: grpc.Metadata, callback: (err: grpc.ServiceError | null, value?: CreateDottleResponse) => void): grpc.ClientUnaryCall;
    createDottle(input: CreateDottleRequest, options: grpc.CallOptions, callback: (err: grpc.ServiceError | null, value?: CreateDottleResponse) => void): grpc.ClientUnaryCall;
    createDottle(input: CreateDottleRequest, callback: (err: grpc.ServiceError | null, value?: CreateDottleResponse) => void): grpc.ClientUnaryCall;
    /**
     * if available, return, else, wait until available
     * rpc GetDotForProcess(GetDotForProcessRequest) returns (stream GetDotForProcessResponse){}
     *
     * @generated from protobuf rpc: GetDotToProcess(dottle.GetDotToProcessRequest) returns (dottle.GetDotToProcessResponse);
     */
    getDotToProcess(input: GetDotToProcessRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (err: grpc.ServiceError | null, value?: GetDotToProcessResponse) => void): grpc.ClientUnaryCall;
    getDotToProcess(input: GetDotToProcessRequest, metadata: grpc.Metadata, callback: (err: grpc.ServiceError | null, value?: GetDotToProcessResponse) => void): grpc.ClientUnaryCall;
    getDotToProcess(input: GetDotToProcessRequest, options: grpc.CallOptions, callback: (err: grpc.ServiceError | null, value?: GetDotToProcessResponse) => void): grpc.ClientUnaryCall;
    getDotToProcess(input: GetDotToProcessRequest, callback: (err: grpc.ServiceError | null, value?: GetDotToProcessResponse) => void): grpc.ClientUnaryCall;
}
/**
 * @generated from protobuf service dottle.CoordinatorService
 */
export class CoordinatorServiceClient extends grpc.Client implements ICoordinatorServiceClient {
    private readonly _binaryOptions: Partial<BinaryReadOptions & BinaryWriteOptions>;
    constructor(address: string, credentials: grpc.ChannelCredentials, options: grpc.ClientOptions = {}, binaryOptions: Partial<BinaryReadOptions & BinaryWriteOptions> = {}) {
        super(address, credentials, options);
        this._binaryOptions = binaryOptions;
    }
    /**
     * test pin pong
     *
     * @generated from protobuf rpc: Test(dottle.TestRequest) returns (dottle.TestResponse);
     */
    test(input: TestRequest, metadata: grpc.Metadata | grpc.CallOptions | ((err: grpc.ServiceError | null, value?: TestResponse) => void), options?: grpc.CallOptions | ((err: grpc.ServiceError | null, value?: TestResponse) => void), callback?: ((err: grpc.ServiceError | null, value?: TestResponse) => void)): grpc.ClientUnaryCall {
        const method = CoordinatorService.methods[0];
        return this.makeUnaryRequest<TestRequest, TestResponse>(`/${CoordinatorService.typeName}/${method.name}`, (value: TestRequest): Buffer => Buffer.from(method.I.toBinary(value, this._binaryOptions)), (value: Buffer): TestResponse => method.O.fromBinary(value, this._binaryOptions), input, (metadata as any), (options as any), (callback as any));
    }
    /**
     * @generated from protobuf rpc: CreateDottle(dottle.CreateDottleRequest) returns (dottle.CreateDottleResponse);
     */
    createDottle(input: CreateDottleRequest, metadata: grpc.Metadata | grpc.CallOptions | ((err: grpc.ServiceError | null, value?: CreateDottleResponse) => void), options?: grpc.CallOptions | ((err: grpc.ServiceError | null, value?: CreateDottleResponse) => void), callback?: ((err: grpc.ServiceError | null, value?: CreateDottleResponse) => void)): grpc.ClientUnaryCall {
        const method = CoordinatorService.methods[1];
        return this.makeUnaryRequest<CreateDottleRequest, CreateDottleResponse>(`/${CoordinatorService.typeName}/${method.name}`, (value: CreateDottleRequest): Buffer => Buffer.from(method.I.toBinary(value, this._binaryOptions)), (value: Buffer): CreateDottleResponse => method.O.fromBinary(value, this._binaryOptions), input, (metadata as any), (options as any), (callback as any));
    }
    /**
     * if available, return, else, wait until available
     * rpc GetDotForProcess(GetDotForProcessRequest) returns (stream GetDotForProcessResponse){}
     *
     * @generated from protobuf rpc: GetDotToProcess(dottle.GetDotToProcessRequest) returns (dottle.GetDotToProcessResponse);
     */
    getDotToProcess(input: GetDotToProcessRequest, metadata: grpc.Metadata | grpc.CallOptions | ((err: grpc.ServiceError | null, value?: GetDotToProcessResponse) => void), options?: grpc.CallOptions | ((err: grpc.ServiceError | null, value?: GetDotToProcessResponse) => void), callback?: ((err: grpc.ServiceError | null, value?: GetDotToProcessResponse) => void)): grpc.ClientUnaryCall {
        const method = CoordinatorService.methods[2];
        return this.makeUnaryRequest<GetDotToProcessRequest, GetDotToProcessResponse>(`/${CoordinatorService.typeName}/${method.name}`, (value: GetDotToProcessRequest): Buffer => Buffer.from(method.I.toBinary(value, this._binaryOptions)), (value: Buffer): GetDotToProcessResponse => method.O.fromBinary(value, this._binaryOptions), input, (metadata as any), (options as any), (callback as any));
    }
}
