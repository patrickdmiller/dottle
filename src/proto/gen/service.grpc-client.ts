// @generated by protobuf-ts 2.9.4 with parameter server_grpc1,client_grpc1
// @generated from protobuf file "service.proto" (package "dottle", syntax proto3)
// tslint:disable
import { CoordinatorService } from "./service";
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { TestResponse } from "./service";
import type { TestRequest } from "./service";
import * as grpc from "@grpc/grpc-js";
/**
 * @generated from protobuf service dottle.CoordinatorService
 */
export interface ICoordinatorServiceClient {
    /**
     * @generated from protobuf rpc: Test(dottle.TestRequest) returns (dottle.TestResponse);
     */
    test(input: TestRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: (err: grpc.ServiceError | null, value?: TestResponse) => void): grpc.ClientUnaryCall;
    test(input: TestRequest, metadata: grpc.Metadata, callback: (err: grpc.ServiceError | null, value?: TestResponse) => void): grpc.ClientUnaryCall;
    test(input: TestRequest, options: grpc.CallOptions, callback: (err: grpc.ServiceError | null, value?: TestResponse) => void): grpc.ClientUnaryCall;
    test(input: TestRequest, callback: (err: grpc.ServiceError | null, value?: TestResponse) => void): grpc.ClientUnaryCall;
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
     * @generated from protobuf rpc: Test(dottle.TestRequest) returns (dottle.TestResponse);
     */
    test(input: TestRequest, metadata: grpc.Metadata | grpc.CallOptions | ((err: grpc.ServiceError | null, value?: TestResponse) => void), options?: grpc.CallOptions | ((err: grpc.ServiceError | null, value?: TestResponse) => void), callback?: ((err: grpc.ServiceError | null, value?: TestResponse) => void)): grpc.ClientUnaryCall {
        const method = CoordinatorService.methods[0];
        return this.makeUnaryRequest<TestRequest, TestResponse>(`/${CoordinatorService.typeName}/${method.name}`, (value: TestRequest): Buffer => Buffer.from(method.I.toBinary(value, this._binaryOptions)), (value: Buffer): TestResponse => method.O.fromBinary(value, this._binaryOptions), input, (metadata as any), (options as any), (callback as any));
    }
}
