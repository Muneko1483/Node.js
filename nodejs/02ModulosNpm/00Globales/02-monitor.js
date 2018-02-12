'use strict'

let http = require('http').createServer(webServer),
    fs = require('fs')
   


function webServer(req, res){

    function readFile(err, data){
        if(err) throw err
            res.end(data) 
    }
 
    res.writeHead(200, {'Content-Type' : 'text/html'})
    fs.readFile('assets/index.html', readFile)     
}

http.listen(3000)

console.log('Server running at http://localhost:3000') 
 
