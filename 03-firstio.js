// lesson 3
var util = require('util');
var fs = require('fs');

var file = fs.readFileSync(process.argv[2]);
var str = file.toString('utf-8', 0, file.length);
var lines = str.split("\n");
console.log(lines.length-1);
