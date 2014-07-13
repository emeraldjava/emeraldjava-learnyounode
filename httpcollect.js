var http = require('http');

var request = http.get(process.argv[2], function(response) {
  //console.log("Got response: " + response.statusCode);
  //console.log('STATUS: ' + response.statusCode);
  //console.log('HEADERS: ' + JSON.stringify(response.headers));
  response.setEncoding('utf8');
  
  var chars = 0;
  var data = '';
  response.on('data', function (chunk) {
    //console.log(chunk.length);
    chars += chunk.length;
  	data += chunk;
  });
  
  response.on('error',console.error);

  response.on('end',function(end) {
  		console.log(chars);
  		console.log(data);
  });

}).on('error', function(e) {
  console.log("Got error: " + e.message);
})