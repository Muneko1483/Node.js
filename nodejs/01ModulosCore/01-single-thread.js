'use strict'

function singleThread(){

    console.log('----------------------------------------------------------')
    console.log('                  El proceso de Node.js                   ')
    console.log('Id del proceso.......................' + process.pid)
    console.log('Titulo...............................' + process.title)
    console.log('Direcorio de Node ...................' + process.execPath)
    console.log('Directorio Actual ...................' + process.cwd())
    console.log('Version de Node......................' + process.version)
    console.log('Versiones Dependecias................' + process.versions)
    console.log('Plataforma (S.O).....................' + process.platform)
    console.log('Arquitectura (S.O)...................' + process.arch )
    console.log('Tiempo activo de Node................' + process.uptime())
    console.log('Argumento del proceso................' + process.argv)
    console.log('----------------------------------------------------------')

}

singleThread()