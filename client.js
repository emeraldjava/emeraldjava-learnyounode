var http = require("http");

var options = {
        host: 'localhost',
        port: 8000,
        path: '/vm/start',
        method: 'POST'
    };

var req = http.request(options, function(res) {
    res.on('data', function(d) {
        console.log(d.toString());
    });
});

req.on('error', function(e) {
    console.error(e);
});

req.end('');