// lesson 7
var http = require('http');
var request = http.get(process.argv[2], function(response) {
  //console.log("Got response: " + response.statusCode);
  //console.log('STATUS: ' + response.statusCode);
  //console.log('HEADERS: ' + JSON.stringify(response.headers));
  response.setEncoding('utf8');
  response.on('data', function (chunk) {
    console.log(chunk);
  });
  response.on('error',console.error);
}).on('error', function(e) {
  console.log("Got error: " + e.message);
})
