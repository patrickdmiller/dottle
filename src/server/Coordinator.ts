import * as grpc from '@grpc/grpc-js';
import { RpcError, RpcInputStream, ServerCallContext } from "@protobuf-ts/runtime-rpc";
import { coordinatorServiceDefinition, ICoordinatorService } from "../proto/gen/service.grpc-server";
import { TestRequest, TestResponse } from "../proto/gen/service";


export class CoordinatorService implements ICoordinatorService {
  [method: string]: grpc.UntypedHandleCall;
  
  test(call: grpc.ServerUnaryCall<TestRequest, TestResponse>, callback: grpc.sendUnaryData<TestResponse>): void {
    call.on('error', args => {
      console.log("example-node-grpc-server unary() got error:", args)
    })
    call.on('error', args => {
      console.log("example-node-grpc-server unary() got error:", args)
    })

    callback(null, {message: `pong : ${call.request.id} : ${call.request.message}`});
    // callback(null, TestResponse.create({
    //   message: `pong ${call.request.id}:${call.request.message}`,
    // }))
  }
}
