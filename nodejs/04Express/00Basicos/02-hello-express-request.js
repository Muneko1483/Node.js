'use strict'

let 
    express = require('express'),
    app = express()

app
    .get('/', (req, res) =>{
    res.end('<h1>Hola mundo desde Express :)</h1>')
 
}) 
    .get('/user/:id-:name-:age', (req, res) =>{
    res.end(`
            <h1>${req.params.name}, Bienvenid@ a  Express :) tu id es <b>
            ${req.params.id}</b> y tienes ${req.params.age} a&ntilde;os</h1>    
                `)
})
.get('/search', (req, res) =>{
    res.end(`
            <h1>
            Bienvenidos a Express, los resultados de tu busqueda son: 
            <mark>${req.query.s}</mark>
            </h1>
    `)
})

.listen(3000)
 
console.log('Iniciando Express en el puerto 3000')