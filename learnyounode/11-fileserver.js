// lesson 11
var http = require("http");
var fs = require("fs");

function onRequest(request, response) {

	//var src = fs.createReadStream(process.argv[2]);

	fs.createReadStream(process.argv[3]).pipe(response);
	//src.pipe(response);
  //response.writeHead(200, {"Content-Type": "text/plain"});
//  response.write("Hello World");
  //console.log("writing "+process.argv[2]);
  //response.end();
}

process.on('SIGINT', function() {
  console.log('Server shutting down');
  process.exit();
});

// http://stackoverflow.com/questions/6958780/quitting-node-js-gracefully
http.createServer(onRequest).listen(process.argv[2]);
