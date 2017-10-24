const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MovieSchema = new Schema({
    movieName: String,
    releaseYear: String,
    genre: String
});

var Movie = mongoose.model('Movie', MovieSchema)
module.exports = Movie;