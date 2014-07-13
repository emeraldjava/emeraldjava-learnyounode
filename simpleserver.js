var http = require("http");

function onRequest(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World");
  console.log("Hi");
  response.end();
}

process.on('SIGINT', function() {
  console.log('Server shutting down');
  process.exit();
});

// http://stackoverflow.com/questions/6958780/quitting-node-js-gracefully
http.createServer(onRequest).listen(8000); 