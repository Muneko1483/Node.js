'use strict'

let 
    fs = require('fs'),
    Q = require('q'),
    file = './assets/nombres.txt',
    newFile = './assets/nombres-promises-q.txt' 


function existFile(file){
    let defer = Q.defer()
    fs.access(file,fs.F_OK, function(err){
        return(err) ? defer.reject(new Error(' El archivo no existe') ) : defer.resolve(true)
    })
    return defer.promise
}   
console.log("El archivo existe")
function readFile(file){
    let defer = Q.defer()
        fs.readFile(file , function(err, data){
        return(err) ? defer.reject(new Error('El archivo no se pudo leer' ) ) : defer.resolve(data)
    })
    return defer.promise
}
console.log("El archivo se puedo leer") 
function writeFile(file, data){
    let defer=Q.defer()
        fs.writeFile(file,data,function(err){
            return(err) ? defer.reject(new Error('El archivo no se pudo copiar') ) : defer.resolve('El archivo se a copiado con exito')
        } )
        return defer.promise
}


/*
Si existe 
    Leelo
    Copialo
    Avisa que se copio
    Maneja Errores
*/   

existFile(file)
    .then(function(){return readFile(file) })
    .then(function (dataPromise){return writeFile(newFile, dataPromise)})
    .then(function(dataPromise){return console.log(dataPromise)})
    .fail(function(){ return console.log(err.message)})