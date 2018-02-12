/**
 * Buffers
 * Es una tira de bytes (datos binarios)
 * Similares a un array de enteros
 * Tamaño fijo
 * Manipular datos directamente
 * Sockets
 * Streams
 * implementar protocolo complejo
 * Manipulacion de ficheros imagenes critografia
 * 
 * 
 * 
 */

'use strict' 
var buf = new Buffer(100),
    buf2 = new Buffer(26),
    str = '\u00bd + \u00bc = \u00be'

buf.write('abcd',0,4, 'ascii')     

console.log(  
    buf,
    buf.toString('ascii'),
    str ,
    str.length + 'characters',
    Buffer.byteLength(str, 'utf8') + 'bytes',
    buf2.length
) 

for(var i=0; i<buf2.length; i++) 
{ 
    buf2[i] = i + 97  
   
}
console.log(buf2.toString('ascii'))