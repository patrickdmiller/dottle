protoc \
    --plugin=./node_modules/.bin/protoc-gen-ts_proto \
    --ts_proto_opt=outputServices=grpc-js,env=node,useOptionals=messages,exportCommonSymbols=false,esModuleInterop=true \
    --ts_proto_out=./src/proto/gen \
    --proto_path ./src/proto ./src/proto/*.proto