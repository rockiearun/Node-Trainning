var http = require('http');
var server = http.createServer();
server.on('request', function (req, res) {
res.writeHead(200, {'Content-Type': 'text/plain'});
res.end('Hello World\n');
})
server.listen(process.env.PORT, process.env.IP);;
console.log('Server started');
/*
var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
}).listen(process.env.PORT, process.env.IP);
*/
/*Adding a branch out changes*/
