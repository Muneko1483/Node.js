'use strict'

let http = require('http').createServer()

function webServer(req, res){

    res.writeHead(200, {'Content-Type' : 'text/html'})
    res.end('<h1>Hello Node.js</h>')

}

http
    .on('request', webServer) 
    .listen(3000, "localhost")

console.log('Server running at http://localhost:3000')

