var net = require('net');
var dateFormat = require('dateformat');

function pad(n) { return n < 10 ? '0' + n : n }

var server = net.createServer(function(c) { //'connection' listener
  console.log('server connected');
  c.on('end', function() {
    console.log('server disconnected');
  });

  // http://stackoverflow.com/questions/10645994/node-js-how-to-format-a-date-string-in-utc
  //var date = dateFormat(c.request_date, "yyyy-mm-dd h:MM");
  d = new Date();
  var date = d.getFullYear() + "-"
    + pad(d.getMonth() + 1) + "-"
    + pad(d.getDate()) + " "
    + pad(d.getHours()) + ":"
    + pad(d.getMinutes());
  c.write(date+'\r\n');
  c.pipe(c);
  c.end();
});
server.listen(8000, function() { //'listening' listener
  console.log('server bound');
});