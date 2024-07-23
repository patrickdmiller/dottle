import { load } from "protobufjs"; // respectively "./node_modules/protobufjs"
import * as path from 'path';
load(path.resolve(__dirname, "./proto/dotjob.proto"), (err, root)=>{
  if(root !== undefined){
    const dotjob = root.lookupType("dottle.Dotjob");
    const message = dotjob.create({dot:{id:"123"}});
    let buffer = dotjob.encode(message).finish()
    let decoded = dotjob.decode(buffer);
    console.log(decoded)
  }
})
load(path.resolve(__dirname, "./proto/dot.proto"), (err, root) => {
  if (err)
    throw err;

  // console.log("here>", root?.lookupType("dottle.Dot"));
  // // example code
  if(root!== undefined){
    const dot = root.lookupType("dottle.Dot");
    const message = dot?.create({id:"ABC13"});
    let buffer = dot?.encode(message).finish();
    console.log(`buffer = ${Array.prototype.toString.call(buffer)}`);
    let decoded = dot.decode(buffer);
    console.log(decoded);
    console.log(`decoded = ${JSON.stringify(decoded)}`);
  }

  // let message = AwesomeMessage.create({ awesomeField: "hello" });
  // console.log(`message = ${JSON.stringify(message)}`);

  // let buffer = AwesomeMessage.encode(message).finish();
  // console.log(`buffer = ${Array.prototype.toString.call(buffer)}`);

  // let decoded = AwesomeMessage.decode(buffer);
  // console.log(`decoded = ${JSON.stringify(decoded)}`);
  
});


