// lesson 9
var http = require('http');

// grabs all the args from the 2nd one
var urls = process.argv.slice(2);

var results = [];
for (i = 0; i < urls.length; i++) {
	results[i]=null;
};

for (i = 0; i < urls.length; i++) {
	doSomeWork(i,urls[i]);
};

function doSomeWork(i,url){
	//console.log(i);

	http.get(url, function(response) {
	response.setEncoding('utf8');

  var chars = 0;
  var data = '';
  response.on('data', function (chunk) {
 		data+=chunk;
  });

  response.on('error',console.error);

  response.on('end',function(end) {
		//console.log(data);
  		results[i]=data;

		var resultCount = 0;
        for (j = 0; j < results.length; j++) {
          if (results[j] != null) resultCount++;
        }
        if (resultCount == results.length) {
          for (j = 0; j < results.length; j++) {
            console.log(results[j]);
          }
        }
  });

	})
}
