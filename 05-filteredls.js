// lesson 5
var util = require('util');
var fs = require('fs');
var regex = new RegExp('\\.' + process.argv[3] + '$')

fs.readdir(process.argv[2],function (err,files) {
  	if (err) throw err;

  	if(process.argv[3]===undefined){
		//console.log('here');
		files.forEach(function(entry) {
		    console.log(entry);
		});
		//console.log(files);
  		// \w*Id\b
  	//	files.
  	}
  	else{
  		files.forEach(function(entry) {

  			// n$	Matches any string with n at the end of it
  			var pattern = process.argv[3]+'$';
  			//Regex regex = new Regex()
  			var res = entry.match(pattern);//rocess.argv[3]);
		    //console.log(res);
		    if(regex.test(entry))
			  console.log(entry);
		});
  		//console.log(files);
  	}
//  	var str = data.toString('utf-8', 0, data.length);
//	var lines = str.split("\n");

});
