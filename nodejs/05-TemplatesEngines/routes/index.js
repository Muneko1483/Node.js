'use strict'

var express = require('express'),
    router = express.Router()

    function jade(req, res, next){  
      let locals ={ 
        title : 'Jade',  
        link : 'https://www.npmjs.com/package/jade', 
        description : `Jade is a high performance template engine heavily influenced 
        by Haml and implemented with JavaScript for node and browsers. For bug reports, 
        feature requests and questions, open an issue. For discussion join the chat room.`
 
      }
      res.render('index', locals)
    }

    function error404(req, res, next){
      let error = new Error(),
          locals = {
              title : 'Error 404',
              description : 'Recurso No Encontrado',
              error : error
          }

      error.status = 404
          
      res.render('error',locals)    

      next()
    }

/* GET home page. */
  router.get('/', (req, res) => { 
  res.end('<h1>Terminamos la configuracion nuestra primer app en Express</h1>')
})

.get('/jade', jade)
.use(error404)

module.exports = router 