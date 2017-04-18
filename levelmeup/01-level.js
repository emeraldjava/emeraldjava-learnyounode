var levelme = require("./01-level-module.js");

levelme.someFunction(process.argv[2],process.argv[3],function(err,result) {
	if(err) {
		return console.error(err);
	}
	console.log(result);
});
