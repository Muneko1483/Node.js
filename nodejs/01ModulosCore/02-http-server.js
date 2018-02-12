'use strict'

/*const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});*/


'use strict'

var http = require('http')

function webServer(req, res){

    res.writeHead(200, {'Content-Type' : 'text/html'})
    res.end('<h1>Hello Node.js</h>')

}

http
    .createServer(webServer)
    .listen(3000, "localhost")

console.log('Server running at http://localhost:3000')