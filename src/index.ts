import { Server, ServerCredentials } from '@grpc/grpc-js';
import { Coordinator, CoordinatorService } from './services/Coordinator';

const server = new Server({
  'grpc.max_receive_message_length': -1,
  'grpc.max_send_message_length': -1,
});

server.addService(CoordinatorService, new Coordinator());

server.bindAsync('0.0.0.0:3000', ServerCredentials.createInsecure(), (err: Error | null, bindPort: number) => {
  if (err) {
    throw err;
  }

  console.log(`*rpc* started. Port: ${bindPort}`);

});

export { server};