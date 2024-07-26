import * as grpc from '@grpc/grpc-js';
import { RpcError, RpcInputStream, ServerCallContext} from "@protobuf-ts/runtime-rpc";
import { coordinatorServiceDefinition, ICoordinatorService } from "../proto/gen/service.grpc-server";
import { TestRequest, TestResponse, CreateDottleRequest, CreateDottleResponse, GetDotForProcessRequest, GetDotForProcessResponse } from "../proto/gen/service";
import { Store } from '../store';

let store: Store;

export class CoordinatorService implements ICoordinatorService {
  [method: string]: grpc.UntypedHandleCall;


  constructor(storeIn: Store) {
    store = storeIn;
  }
  handleError(args: any, cb: Function) {
    console.error("Error in Coordinator", args)
    if (cb)
      cb(args);
  }

  test(call: grpc.ServerUnaryCall<TestRequest, TestResponse>, callback: grpc.sendUnaryData<TestResponse>): void {
    call.on('error', this.handleError);

    // callback(null, {message: `pong : ${call.request.id} : ${call.request.message}`});
    //or you can make it
    callback(null, TestResponse.create({ message: `pong : ${call.request.id} : ${call.request.message}` }))
  }

  async createDottle(call: grpc.ServerUnaryCall<CreateDottleRequest, CreateDottleResponse>, callback: grpc.sendUnaryData<CreateDottleResponse>): Promise<void> {
    call.on('error', this.handleError);
    if (!call.request.dottle) {
      this.handleError(new Error("no dottle defined"), callback)
    } else {
      try{
        await store.setDottle(call.request.dottle);
        let result = await store.getDottle(call.request.dottle.id)
        if(result){
          console.log("pulled : ", result)
          console.log("the dots", result.dots)
          callback(null, CreateDottleResponse.create(result));
        }
      }catch(e : unknown){
        
        this.handleError(new Error(e+''), callback)
      }
        
    }
  }
  async getDotForProcess(call: grpc.ServerWritableStream<GetDotForProcessRequest, GetDotForProcessResponse>) : Promise<void> {
    call.on('error', this.handleError);
    
  }
}
