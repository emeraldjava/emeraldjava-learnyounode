var filemanager = require("./filemanager.js");

filemanager(process.argv[2],process.argv[3],function(err,files){
	if(err) {
		return console.error(err);
	}
	files.forEach(function(files) {
		console.log(files);
	});
});
