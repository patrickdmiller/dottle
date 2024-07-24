import { credentials, Metadata } from '@grpc/grpc-js';
import { promisify } from 'util';

import { CoordinatorClient, TestRequest, TestResponse } from '../proto/gen/service';

/**
 * https://github.com/grpc/grpc-node/issues/54
 */
class ClientService {
  private readonly client: CoordinatorClient = new CoordinatorClient('localhost:3000', credentials.createInsecure());

  public async test(param: TestRequest, metadata: Metadata = new Metadata()): Promise<TestResponse> {
    return promisify<TestRequest, Metadata, TestResponse>(this.client.test.bind(this.client))(param, metadata);
  }
}

export const clientService: ClientService = new ClientService();