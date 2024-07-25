import {ChannelCredentials} from "@grpc/grpc-js";
import {CoordinatorServiceClient, ICoordinatorServiceClient} from "../proto/gen/service.grpc-client";


const client = new CoordinatorServiceClient(
    "localhost:3000",
    ChannelCredentials.createInsecure(),
    {},
    {}
);

client.test({
  id:"some_id",
  message: "helo"
}, (err, value) => {
  if (err) {
      console.log("got err: ", err)
  }
  if (value) {
      console.log("got response message: ", value)
  }
});
