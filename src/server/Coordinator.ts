import * as grpc from '@grpc/grpc-js';
import { RpcError, RpcInputStream, ServerCallContext} from "@protobuf-ts/runtime-rpc";
import { coordinatorServiceDefinition, ICoordinatorService } from "../proto/gen/service.grpc-server";
import { TestRequest, TestResponse, CreateDottleRequest, CreateDottleResponse, GetDotToProcessRequest, GetDotToProcessResponse , FinishDotProcessRequest, FinishDotProcessResponse} from "../proto/gen/service";
import { Store } from '../store';
import { DotToProcess, FullDotId } from '../proto/gen/dot';
import { dot } from 'node:test/reporters';

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
        await store.addDottle(call.request.dottle);
        let result = await store.getDottle(call.request.dottle.id)
        if(result){
          callback(null, CreateDottleResponse.create(result));
        }
      }catch(e){
        console.log("in catch", e)
        this.handleError(new Error(e+''), callback)
      }
        
    }
  }

  async getDotToProcess(call: grpc.ServerUnaryCall<GetDotToProcessRequest, GetDotToProcessResponse>, callback: grpc.sendUnaryData<GetDotToProcessResponse>):Promise<void>{
    call.on('error', this.handleError);
    let dotToProcess = await store.getNextDotToProcess();
    if(dotToProcess == null){
      callback(null, GetDotToProcessResponse.create());
    }else{
      callback(null, GetDotToProcessResponse.create({dotToProcess:dotToProcess}));
    }
  }

  async finishDotProcess(call: grpc.ServerUnaryCall<FinishDotProcessRequest, FinishDotProcessResponse>, callback: grpc.sendUnaryData<FinishDotProcessResponse>): Promise<void>{
    call.on('error', this.handleError);
    await store.finishDotProcess(FullDotId.create({dotId:call.request.dotId, dottleId: call.request.dottleId}));
    // TODO

    callback(null,null)
  }


}
