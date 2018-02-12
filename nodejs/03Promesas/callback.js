'use strict'

let 
    fs = require('fs'),
    file = './assets/nombres.txt',
    newFile = './assets/nombres-callback.txt' 

fs.access('./assets/nombres.txt',fs.F_OK, function(err){
    if(err){
        console.log("El archivo no existe")
    }
    else{
        console.log("El archivo existe")
        fs.readFile(file,function(err, data){
            if(err)
            {
                console.log("El archivo no se puedo leer")
            }
            else {
                console.log("El archivo se puedo leer")  
                fs.writeFile(newFile, data, function(err){
                    return (err) ? console.log('El archivo no se pudo copiar') : console.log('el archivo se a copiado con exito')
                })
            }
        })
    }
        
    
})    