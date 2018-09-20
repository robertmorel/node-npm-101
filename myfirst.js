var https = require('https');
var fs = require('fs');
https.createServer(function (req, res) {
  fs.readFile('pardot.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });
}).listen(8080);