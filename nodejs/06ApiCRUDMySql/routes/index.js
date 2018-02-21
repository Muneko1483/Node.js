'use strict'

var 
    movies = require('../models/movies'),
    express = require('express'),
    router = express.Router()

   
function error404(req, res, next)
{
          let error = new Error(),
              locals = {
                  title : 'Error 404',
                  description : 'Recurso No Encontrado',
                  error : error
            }

      error.status = 404
          
      res.render('index',locals)    

      next()
} 
router
    .use(movies)
    .get('/', (req, res, next) => { 
        req.getConnection((err,movies) => {
            movies.query('SELECT * FROM movie', (err,rows) => {
                let locals ={
                    title : 'Lista Peliculas',
                    data : rows
                }
                res.render('index', locals)   
            })

        })
        next()
    })

  .use(error404)

module.exports = router        


/*        .get('/agregar',(req, res ,next) =>{
          res.render('add-movie', { title : 'Agregar Pelicula' })

      })
      .post('/', (req, res, next) =>{
          req.getConnection((err, movie) =>{
              let moviee = {
                  movie_id : req.body.movie, 
                  title : require.body.title,
                  release_year : req.body.release_year,
                  rating : req.body.rating,
                  image : req.body.image
          }

          console.log(movie)

          movie.query('INSERT INTO movie SET ?',movie, (err, rows) =>{
              return (err) ? res.redirect('/agrgar') : res.redirect('/')

          })
      })

  })
  .use(error404)

  module.exports = router    */ 