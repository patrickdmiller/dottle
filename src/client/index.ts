import 'source-map-support/register';
import { credentials, Metadata, ServiceError } from '@grpc/grpc-js';

import { clientService } from './clientService';
import { CoordinatorClient, TestRequest, TestResponse } from '../proto/gen/service';

// https://github.com/grpc/grpc/blob/master/doc/keepalive.md
// https://cloud.ibm.com/docs/blockchain-multicloud?topic=blockchain-multicloud-best-practices-app#best-practices-app-connections
const client = new CoordinatorClient('localhost:3000', credentials.createInsecure(), {
  'grpc.keepalive_time_ms': 120000,
  'grpc.http2.min_time_between_pings_ms': 120000,
  'grpc.keepalive_timeout_ms': 20000,
  'grpc.http2.max_pings_without_data': 0,
  'grpc.keepalive_permit_without_calls': 1,
});


const param: TestRequest = {
  id: "testid",
  message: "this is test message"
};

const metadata = new Metadata();
metadata.add('foo', 'bar1');
metadata.add('foo', 'bar2');

async function test(): Promise<void> {
  // callback
  client.test(param, (err: ServiceError | null, res: TestResponse) => {
   if(err)
    console.error("cb", err)
   console.log("cb", res);
  });

  // promise
  const answer = await clientService.test(param, metadata);
  console.log("promise", answer)

}

test();