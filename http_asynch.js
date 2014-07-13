
// grabs all the args from the 2nd one
var urls = process.argv.slice(2);

var results = [];
urls.forEach(function(url){
	results[url]=null;
});

urls.forEach(function(url){
	doSomeWork(url);
});
//console.log(urls);

function doSomeWork(url){
	console.log(url);
}