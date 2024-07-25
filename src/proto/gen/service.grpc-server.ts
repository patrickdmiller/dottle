// @generated by protobuf-ts 2.9.4 with parameter server_grpc1,client_grpc1
// @generated from protobuf file "service.proto" (package "dottle", syntax proto3)
// tslint:disable
import { CreateDottleResponse } from "./service";
import { CreateDottleRequest } from "./service";
import { TestResponse } from "./service";
import { TestRequest } from "./service";
import type * as grpc from "@grpc/grpc-js";
/**
 * @generated from protobuf service dottle.CoordinatorService
 */
export interface ICoordinatorService extends grpc.UntypedServiceImplementation {
    /**
     * test pin pong
     *
     * @generated from protobuf rpc: Test(dottle.TestRequest) returns (dottle.TestResponse);
     */
    test: grpc.handleUnaryCall<TestRequest, TestResponse>;
    /**
     * @generated from protobuf rpc: CreateDottle(dottle.CreateDottleRequest) returns (dottle.CreateDottleResponse);
     */
    createDottle: grpc.handleUnaryCall<CreateDottleRequest, CreateDottleResponse>;
}
/**
 * @grpc/grpc-js definition for the protobuf service dottle.CoordinatorService.
 *
 * Usage: Implement the interface ICoordinatorService and add to a grpc server.
 *
 * ```typescript
 * const server = new grpc.Server();
 * const service: ICoordinatorService = ...
 * server.addService(coordinatorServiceDefinition, service);
 * ```
 */
export const coordinatorServiceDefinition: grpc.ServiceDefinition<ICoordinatorService> = {
    test: {
        path: "/dottle.CoordinatorService/Test",
        originalName: "Test",
        requestStream: false,
        responseStream: false,
        responseDeserialize: bytes => TestResponse.fromBinary(bytes),
        requestDeserialize: bytes => TestRequest.fromBinary(bytes),
        responseSerialize: value => Buffer.from(TestResponse.toBinary(value)),
        requestSerialize: value => Buffer.from(TestRequest.toBinary(value))
    },
    createDottle: {
        path: "/dottle.CoordinatorService/CreateDottle",
        originalName: "CreateDottle",
        requestStream: false,
        responseStream: false,
        responseDeserialize: bytes => CreateDottleResponse.fromBinary(bytes),
        requestDeserialize: bytes => CreateDottleRequest.fromBinary(bytes),
        responseSerialize: value => Buffer.from(CreateDottleResponse.toBinary(value)),
        requestSerialize: value => Buffer.from(CreateDottleRequest.toBinary(value))
    }
};
