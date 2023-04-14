const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    releaseYear: Number,
    rating: {
        type: String,
        enum: ['G', 'PG', 'PG13', 'R', 'NR'],
    },
    nowShowing: Boolean
})

const Movie = mongoose.model('Movie', movieSchema);
module.exports = Movie;