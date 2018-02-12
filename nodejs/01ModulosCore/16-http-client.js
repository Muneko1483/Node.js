'use stric'

let http = require('http'),
    options = {
        host: 'jonmircha.com', 
        port : 80, 
        path : '/en'
    }

http.get(options, function(res){ 
    console.log(`El sitio espacio ${options.host} ha respondido. codigo de Estado: ${res.statusCode}`)
})

.on('error', function(err){
    console.log(`El sitio espacio ${options.host} no ha respondido. codigo de Estado: ${err.code}. Error: ${err.message}`)
})
