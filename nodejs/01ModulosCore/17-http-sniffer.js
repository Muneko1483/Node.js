'use stric'

let http = require('http'),
    options = {
        host: 'www.mediotiempo.com',  
        port : 80, 
        path : '/login?internal_source=SEGUNDO_MENU'
    },
    htmlCode = ''

function httpClient(res)
    { 
     console.log(`El sitio espacio ${options.host} ha respondido. codigo de Estado: ${res.statusCode}`)
     res.on('data', function(data){
         htmlCode += data
         console.log(
             data,
            data.toString()
        )

     })
    }    
     
function httpError(err)
    {
     console.log(`El sitio espacio ${options.host} no ha respondido. codigo de Estado: ${err.code}. Error: ${err.message}`)
    }  
    
function webServer(req, res)
{
    res.writeHead(200, {'Content-Type' : 'text/html'})
    res.end(htmlCode) 
}    
///instancia cliente de http
http
    .get(options, httpClient )
    .on('error',httpError )

 //instanicia server de http
 http   
    .createServer(webServer)
    .listen(3000)

  console.log('Server running at http://localhost:3000')
