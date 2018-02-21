'use strict'

let
    express = require('express'),
    favicon = require('serve-favicon'),
    morgan = require('morgan'),
    jade = require('jade'),
    routes = require('./routes/index'), 
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
        .use(morgan ('dev') ) 
        .use(publicDir)

        //ejecutando el middlewera Enrutador
        .use('/', routes)

 module.exports = app      



