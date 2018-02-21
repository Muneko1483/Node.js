'use strict'

let
    mysql = require('mysql'),
    conf = require('./db-conf'),

      dbOptions = {
        host : conf.mysql.host,
        port : conf.mysql.port,
        user : conf.mysql.user,
        password : conf.mysql.pass, 
        database : conf.mysql.db 

    },
    myConn = mysql.createConnection(dbOptions)  
myConn.connect((err) =>{
    return(err) ? console.log(`Error al Conectar a MySQL: ${err.stack}`) : console.log(`
    Conexion establecida con MySQL N°: ${myConn.threadId}`) 
})  

console.log(conf.mysql.db)
    
module.exports = myConn
