// lesson 12
var http = require("http");


function onRequest(request, response) {

	if(request.method=='POST') {
		var inputData = '';

		request.on('data',function(data){
			inputData += data;
		});

		request.on('end', function () {
        console.log(inputData.toUpperCase());
				response.write(inputData.toUpperCase());
				response.end();
    });
	}
}

process.on('SIGINT', function() {
  console.log('Server shutting down');
  process.exit();
});

// http://stackoverflow.com/questions/6958780/quitting-node-js-gracefully
http.createServer(onRequest).listen(process.argv[2]);
