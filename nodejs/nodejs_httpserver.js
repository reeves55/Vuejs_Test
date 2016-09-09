/**
 * Created by Reeves on 2016/9/8.
 */
var http = require('http');
console.log('test node.js http_server...');
http.createServer(function (request, response) {
    var data = {'result': '<p>来自服务器端代码片段</p>'};
    response.writeHead(200, {'Content-Type': 'application/json;charset=utf-8', 'Access-Control-Allow-Origin': '*'});
    response.end(JSON.stringify(data));
}).listen(8001);

console.log('node.js server run at http://localhost:8001/...');