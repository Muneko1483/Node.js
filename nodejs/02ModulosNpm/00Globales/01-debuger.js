///Hacer Debug con el core de  Node en la terminar ejecutar node debug nombre-script.js

'use strict'
let 
    http = require('http')

function webServer(req, res){

    res.writeHead(200, {'Content-Type' : 'text/html'})
    debugger;
    res.end('<h1>Hello Node.js</h>')
   
}

http
    .createServer(webServer)
    .listen(3000, "localhost")

console.log('Server running at http://localhost:3000')