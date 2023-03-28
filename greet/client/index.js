const grpc = require('@grpc/grpc-js');
const {GreetServiceClient} = require('../proto/greet_grpc_pb');
const {GreetRequest} = require('../proto/greet_pb');

function doGreet(client) {
  console.log('Greet was invoked ');

  const req = new GreetRequest()
  .setFirstName('Oscar');

  client.greet(req, (err, res) => {
    if (err) {
      console.log(err);
    } 

    console.log(res.getResult());
    
  });
}




function main() {
  const client = new GreetServiceClient('0.0.0.0:50051', grpc.credentials.createInsecure());

  doGreet(client);
  client.close();
}

main();
