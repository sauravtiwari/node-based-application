var router = require('express').Router()
var Movie = require('../models/movie');
router.post('/chodu',(req, res, next)=>{
    console.log(`${req.body.movieName}`)
    console.log(req.body.releaseYear)
    console.log(req.body.genre)
    var newMovie = new Movie({
      movieName: req.body.movieName,
      releaseYear: req.body.releaseYear,
      genre: req.body.genre
    });
    newMovie.save((err, movie)=>{
      if(err){
        console.log(err);
        return res.json({
          'Messge':'Some database Error occured'
        });
      }
      return res.json({
        'Messge':movie
      })
    })
  })

  module.exports = router;