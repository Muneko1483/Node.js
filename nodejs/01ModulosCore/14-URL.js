/*PATH
Contiene utilidades para manejar y transformar las rutas de los directorios y archivos a formato de cadena.El sistema contiene
de archivos no es consultando para comprobar si los cambios son validades.
*/

'use strict'

let http = require('http').createServer(webServer),
    path = require('path'),
    url = require('url'),
    urls = [
        
        {
            id : 1,
            route : '',
            output : '<h2>Home</h2>'
        },
         
        {
            id : 2,
            route : 'acerca',
            output : '<h2>Acerca</h2>'
        },
         
        {
            id : 3,
            route : 'contacto',
            output : '<h2>Contacto</h2>'  
        }
    ]

    function webServer(req, res){
        let message = '<h1>Hola Node.js</h2>',
        pathURL = path.basename(req.url),
        id = url.parse(req.url, true).query.id
        
     

        console.log(`path${pathURL},id :${id} `)

        urls.forEach(function(pos){
            if(pos.route== pathURL || pos.id == id){
                res.writeHead(200, {'Content-Type':'text/html'})
                res.end(message + pos.output)
            }
        })
         
        if(!res.finished)
        {
            res.writeHead(404, {'Content-Type':'text/html'})
            res.end('<h1>Error 404 : Not Found</h1>')
        }
    }
    http.listen(3000)
    console.log('Server running at http://localhost:3000')
