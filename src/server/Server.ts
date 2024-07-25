import * as grpc from '@grpc/grpc-js';
import { CoordinatorService } from './Coordinator'
import { coordinatorServiceDefinition, ICoordinatorService } from "../proto/gen/service.grpc-server";
import {Store} from '../store'


export class Server {
  store : Store; 

  constructor(store : Store){
    this.store = store;
  }

  start() {
    const getServer = ():grpc.Server=>{
    // function getServer(): grpc.Server {
      const server = new grpc.Server();
      server.addService(coordinatorServiceDefinition, new CoordinatorService(this.store));
      return server;
    }
      const server = getServer();
      server.bindAsync(
        "0.0.0.0:3000",
        grpc.ServerCredentials.createInsecure(),
        (err: Error | null, port: number) => {
          if (err) {
            console.error(`Server error: ${err.message}`);
          } else {
            console.log(`Server bound on port: ${port}`);
          }
        }
      );
  }
}