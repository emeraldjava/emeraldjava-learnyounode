var util = require('util');
var fs = require('fs');

fs.readFile(process.argv[2],'utf-8',function (err, data) {
  	if (err) throw err;
  	var str = data.toString('utf-8', 0, data.length);
	var lines = str.split("\n");
	console.log(lines.length-1);
});
