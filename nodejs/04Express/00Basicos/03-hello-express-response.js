'use strict'

let 
    express = require('express'),
    app = express()

app
    .get('/', (req, res) =>{ 
    //res.end('<h1>Hola mundo desde Express</h1>')
    res.send('<h1>Hola mundo desde Express</h1>')
 
}) 
    .get('/Carlos', (req, res) =>{
    //res.end('<h1>Hola mundo desde Express</h1>')
    //res.send('<h1>Cheves o que</h1>')
    res.redirect(301, 'https://www.hbo.com/')

})

    .get('/json', (req, res) =>{   
    res.json({
            name: "Carlos",
            age : 25,
            face : "Carlos Guzman"
    })
})
    .get('/render', (req, res) => { 
        //res.end('<h1>Hola mundo desde Express</h1>')
        res.render( `${__dirname}/assets/index.html` )
       
     
    }) 

    .listen(3000)
    console.log('Iniciando Express en el puerto 3000') 