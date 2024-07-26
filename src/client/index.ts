import {ChannelCredentials} from "@grpc/grpc-js";
import {CoordinatorServiceClient, ICoordinatorServiceClient} from "../proto/gen/service.grpc-client";
import {Dottle} from "../proto/gen/dottle";
import {Dot, Container, Parameter} from "../proto/gen/dot";
import {setOneofValue} from '@protobuf-ts/runtime';
import { CreateDottleRequest } from "../proto/gen/service";
const client = new CoordinatorServiceClient(
    "localhost:3000",
    ChannelCredentials.createInsecure(),
    {},
    {}
);

// client.test({
//   id:"some_id",
//   message: "helo"
// }, (err, value) => {
//   if (err) {
//       console.log("got err: ", err)
//   }
//   if (value) {
//       console.log("got response message: ", value)
//   }
// });

const dottle = Dottle.create()
dottle.id = "abc123"
dottle.name = "my test dottle"
dottle.priority = 9
dottle.dots = []
dottle.dots.push(Dot.create({
  id: "dot1",
  type: {
    oneofKind: 'container',
    container:Container.create({
      uri: 'someuri',
      parameters:[
        Parameter.create({
          key: "param1",
          value: {
            oneofKind: "stringValue",
            stringValue:"val",
          },
        })
      ]
    })
  }
}))

dottle.dots.push(Dot.create({
  id: "dot2",
  type: {
    oneofKind: 'container',
    container:Container.create({
      uri: 'someuri2',
      parameters:[
        Parameter.create({
          key: "param1",
          value: {
            oneofKind: "stringValue",
            stringValue:"val2",
          },
        })
      ]
    })
  }
}))
// create dottle example
client.createDottle(CreateDottleRequest.create({dottle: dottle}),  (err, value)=>{
  console.log(err)
  console.log(value)
});

const dottle2 = Dottle.create()
dottle2.id = "zyx123"
dottle2.name = "my test dottle2"
dottle2.priority = 4
dottle2.dots = []
dottle2.dots.push(Dot.create({
  id: "dot3",
  type: {
    oneofKind: 'container',
    container:Container.create({
      uri: 'someuri',
      parameters:[
        Parameter.create({
          key: "param1",
          value: {
            oneofKind: "stringValue",
            stringValue:"val",
          },
        })
      ]
    })
  }
}))
dottle2.dots.push(Dot.create({
  id: "dot4",
  type: {
    oneofKind: 'container',
    container:Container.create({
      uri: 'someuri2',
      parameters:[
        Parameter.create({
          key: "param1",
          value: {
            oneofKind: "stringValue",
            stringValue:"val2",
          },
        })
      ]
    })
  }
}))
// create dottle example
client.createDottle(CreateDottleRequest.create({dottle: dottle2}),  (err, value)=>{
  console.log(err)
  console.log(value)
});