var util = require('util');
var fs = require('fs');

//console.log(process.argv[3]);

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
  			var res = entry.match(process.argv[3]);
		    //console.log(res);
		    if(res!=null)
			  console.log(entry);
		});
  		//console.log(files);
  	}
//  	var str = data.toString('utf-8', 0, data.length);
//	var lines = str.split("\n");

});