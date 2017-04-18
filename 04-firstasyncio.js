// lesson 4
var util = require('util');
var fs = require('fs');

var newLineCount = undefined;

fs.readFile(process.argv[2],'utf-8',function (err, data) {
  	if (err)
      throw err;

  	var str = data.toString('utf-8', 0, data.length);
    var lines = str.split("\n");
    newLineCount = lines.length-1;
    //console.log(lines.length-1);
});

function logMyNumber() {
  console.log(newLineCount)
}

//var fs = require('fs')
//var file = process.argv[2]

// fs.readFile(file, function (err, contents) {
//  if (err) {
//    return console.log(err)
//  }
//  // fs.readFile(file, 'utf8', callback) can also be used
//  var lines = contents.toString().split('\n').length - 1
//  console.log(lines)
// })
