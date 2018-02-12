/*
Streams
'Chorros' de informacion que se trasmita en pedazos
3 tipos: Lectura/ Escritura /Duplex
Acceso asincrono
Es raro crear streams directamente
pero muchos recursos nos ofreceb esta interface
detras de muchos mecanismos de node js.
stdin/stdoun
request de http
Sockets
Manipulacion de ficheros imagenes


*/ 
/*
'use stric'
    const  fs = require('fs'),
    readStream = fs.createReadStream('assets/nombres.txt'), 
    WriteStream = fs.createWriteStream('assets/nombres_copia.txt')

    readStream.pipe(WriteStream)  

    readStream.on('data', function(chunk) {
    console.log(
        'He leido: ',
        chunk.length,
        'caracteres'
        )
        }
    )
    readStream.on('end', function(){
        console.log('Termine de leer archivos')
    })*/



    'use stric'
    const  fs = require('fs'),
    readStream = fs.createReadStream('assets/nombres.txt'), 
    WriteStream = fs.createWriteStream('assets/nombres_copia.txt')

    readStream.pipe(WriteStream)  
 
    readStream
         .on('data', function(chunk){
            console.log(
                'He leido: ',
                chunk.length,
                'caracteres'
            )  

        })

        .on('end', function(){
            console.log('Termine de leer el archivo')
        })
    
