'use strict'

let
    express = require('express'),
    favicon = require('serve-favicon'),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    jade = require('jade'),
    restFull = require('express-method-override')('_method'), 
    routes = require('./routes/movie-router'), 
    faviconURL = `${__dirname}/public/img/download.png`,
    publicDir = express.static(`${__dirname}/public`),
    viewDir = `${__dirname}/views`,
    port = (process.env.PORT || 3000),
    app = express()

    app
        //configurando app 
        .set('views', viewDir)
        .set('view engine', 'jade')
        .set('port', port)  

        //ejecutando middlewares
        .use(favicon(faviconURL) )
        .use( bodyParser.json() )
        .use( bodyParser.urlencoded ({extended: false}))
        .use( restFull )
        .use(morgan ('dev') ) 
        .use(publicDir)
        .use( routes)
      
        

 module.exports = app      



