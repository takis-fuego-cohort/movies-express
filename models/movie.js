const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema({
    title: String,
    releaseYear: Number,
    rating: {
        type: String,
        enum: ['G', 'PG', 'PG13', 'R', 'NR'],
    },
    nowShowing: Boolean
})

const Movie = mongoose.model('Movie', movieSchema);
module.exports = Movie;