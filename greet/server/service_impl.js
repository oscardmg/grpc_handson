const pb = require('../proto/greet_pb');

exports.greet = (call, callback) => {
  console.log('Greet was invoked ');
  const response = new pb.GreetResponse();
  response.setResult('Hello ' + call.request.getFirstName());

  callback(null, response);
}