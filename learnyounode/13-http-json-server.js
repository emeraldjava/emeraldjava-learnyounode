// lesson 13
var http = require('http');
var url = require('url');
var querystring = require('querystring');
var dateFormat = require('dateformat');

function onRequest(request, response) {

	var url_parts = url.parse(request.url,true);
	//console.log(url_parts.pathname);
	//console.log(url_parts.search);

	// /api/parsetime?iso=2013-08-10T12:10:15.474Z
	if(url_parts.pathname=='/api/parsetime') {
		console.log(url_parts.pathname);
		console.log(url_parts.query['iso']);

		date = new Date(url_parts.query['iso']);//.toJSON();
		//console.log(date.getFullYear());
		//console.log(date.getMonth());
		//console.log(date.getDate());

		// reply
		// The JSON response should contain only 'hour', 'minute' and 'second'  properties. For example:
    // {
    //   "hour": 14,
    //   "minute": 23,
    //   "second": 15
    // }
		var obj = { "hour":date.getHours(), "minute":date.getMinutes(), "second":date.getSeconds()};
		var myJSON = JSON.stringify(obj);
		console.log(myJSON);

		response.writeHead(200, { 'Content-Type': 'application/json' })
		response.write(myJSON);
		response.end();
	}

	if(url_parts.pathname=='/api/unixtime') {
		console.log(url_parts.pathname);
		//console.log(url_parts.query);
		console.log(url_parts.query['iso']);

		date = new Date(url_parts.query['iso']);
		console.log(date.getTime());

		var obj = { "unixtime":date.getTime()};
		var myJSON = JSON.stringify(obj);
		console.log(myJSON);

		//Date.getTime()
		response.writeHead(200, { 'Content-Type': 'application/json' })
		response.write(myJSON);
		response.end();
	}

}

process.on('SIGINT', function() {
  console.log('Server shutting down');
  process.exit();
});

// http://stackoverflow.com/questions/6958780/quitting-node-js-gracefully
http.createServer(onRequest).listen(process.argv[2]);
