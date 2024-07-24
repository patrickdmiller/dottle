import {
  handleUnaryCall,
  sendUnaryData,
  ServerDuplexStream,
  ServerReadableStream,
  ServerUnaryCall,
  ServerWritableStream,
  status,
  UntypedHandleCall,
} from '@grpc/grpc-js';

import {CoordinatorServer, CoordinatorService, TestRequest, TestResponse} from '../proto/gen/service';

class Coordinator implements CoordinatorServer {
  [method: string]: UntypedHandleCall;

  public test(call : ServerUnaryCall<TestRequest, TestResponse>, callback : sendUnaryData<TestResponse>): void {
    
    // decompose request
    const {id, message} = call.request;
    
    const response: Partial<TestResponse> = {}
    response.message = "response to :" + message

    callback(null, TestResponse.fromJSON(response));

  }
}

export {Coordinator, CoordinatorService}