'use strict'

let
    app = require('./app'),
    sever = app.listen(app.get('port'), ()  => {
        console.log(`Iniciando Express en el puerto ${app.get('port')}`)
    })  