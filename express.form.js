var express = require('express');
var path = require('path');
//var connect = require('connect')

var app = express();
app.use(express.bodyParser());
app.set('view engine','jade');
app.set('views', path.join(__dirname, 'templates'))

app.get('/form', function(req, res) {
	res.render('form', {date: new Date().toDateString()});
});

//app.use(connect.urlencoded());

app.use(express.methodOverride());

app.post('/reverse', function(req, res){
	console.log("IN "+req.body.str);
	//var st = "abc".split('').reverse().join('');
	var st = req.body.str.split('').reverse().join('');
	res.end(st);
});

app.listen(process.argv[2]);
