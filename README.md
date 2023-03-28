
npm i google-protobuf @grpc/grpc-js    
npm_config_target_arch=x64 npm i -D grpc-tools


./node_modules/.bin/grpc_tools_node_protoc --js_out=. --grpc_out=. dummy.proto


npm run greet:server
npm run greet:client