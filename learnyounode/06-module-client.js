var filemanager = require("./06-filemanager.js");
var dir = process.argv[2];
var filter = process.argv[3];

filemanager(dir,filter,function(err,files){
	if(err) {
		return console.error(err);
	}
	files.forEach(function(files) {
		console.log(files);
	});
});
