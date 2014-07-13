
// http://stackoverflow.com/questions/20534702/node-js-use-of-module-exports-as-a-constructor

var fs = require('fs');
var path = require('path');

module.exports = function(directory,filter,callback) {
	fs.readdir(directory,function (err,files) {
  		if (err) {
  			return callback(err);
  		}
  		else {
  			var result = [];
			files.forEach(function(file) {
    			if(path.extname(file)==='.'+filter)
					result.push(file);
			});
		}
		callback(null,result);
	});
}
