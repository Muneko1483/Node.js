'use strict'

let
    mysql = require('mysql'),
    myConnection = require('express-myconnection'),
    dbOptions = {
        host : 'localhost',
        port : 3306,
        user : 'root',
        password : 'Naruto231483', 
        database : 'movies' 

    },
    Movies = myConnection(mysql, dbOptions, 'request')  

module.exports = Movies
