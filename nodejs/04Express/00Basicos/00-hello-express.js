'use strict'

let 
    express = require('express'),
    app = express()

app.get('/', (req, res) =>{
    res.end('<h1>Hola mundo desde Express</h1>')
 
})

.listen(3000)
 
console.log('Iniciando Express en el puerto 3000')