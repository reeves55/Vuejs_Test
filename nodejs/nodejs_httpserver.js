/**
 * Created by Reeves on 2016/9/8.
 */
var http = require('http');
console.log('test node.js http_server...');
http.createServer(function (request,response) {
    response.writeHead(200,{'Content-Type':'text/plain'});
    response.end('Hello Node.js Server!');
}).listen(8001);

console.log('node.js server run at http://localhost:8001/...');