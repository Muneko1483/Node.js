
'use strict'

let 
    fs = require('fs'),
    file = './assets/nombres.txt',
    newFile = './assets/nombres-promises-es6.txt',
    promise = new Promise(function (resolve, reject){
        fs.access(file,fs.F_OK, function(err){
            return(err) ? reject(new Error(' El archivo no existe') ) : resolve(true)
        })
    })

promise
    .then((resolved, rejected) => { 
        console.log('El archivo existe') 
        return new Promise( (resolve,reject) => {
            fs.readFile(file , function(err, data){
                return(err) ? reject(new Error('El archivo no se pudo leer' ) ) : resolve(data)
                
            })
        }) 
    } )
    .then((resolved, rejected) => {
        console.log('El archivo se a leido exitosamente')
        return new Promise((resolve, reject) =>{
            fs.writeFile(newFile,resolved,function(err){
                return(err) ? reject(new Error('El archivo no se pudo copiar') ) : resolve('El archivo se a copiado con exito')
            } )
        })
    } )
    .then((resolved, rejected)=> { 
        console.log(resolved)   
    } ) 
    .catch((err)=> {} )
    
 