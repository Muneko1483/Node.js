//*'use strict'

let 
    MovieModel = require('../models/movies-model'),
    MovieController = () => {

    }

MovieController.getAll = (req, res, next) =>{

    MovieModel.getAll((err, rows) =>{
        if(err)
        {
            
            let locals ={
                title : 'Error al consultar la base de datos',
                description: "Error de Sintaxis SQL",
                data : rows
        }
             res.render('error', locals)   
         
        }
        else{

            let locals ={
                title : 'Lista de Peliculas',
                data : rows
        }
             res.render('error', locals)   
         }
        })
}        

MovieController.getOner = (req, res, next) =>{

}

MovieController.insert = (req, res, next) =>{

}

MovieController.update = (req, res, next) =>{

}

MovieController.delete = (req, res, next) =>{

}

MovieController.addForm = (req, res, next) =>{

}

MovieController.error404 = (req, res, next) =>{

}

module.exports = MovieController 