const mongoose = require('mongoose')
const reviewSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        min: 1,
        max: 5,
        required: true
    }
})
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
    nowShowing: Boolean,
    reviews: [reviewSchema]
    // One-To-Many Relationship
    // One-To-One Relationship
    // Many-To-Many Relationship
})

const Movie = mongoose.model('Movie', movieSchema);
module.exports = Movie;