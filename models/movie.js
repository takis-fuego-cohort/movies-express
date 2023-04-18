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
    // One-To-Many Relationship
    reviews: [reviewSchema],
    // Many-To-Many Relationship
    cast: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Performer'
    }],
    // One-To-One Relationship

})

const Movie = mongoose.model('Movie', movieSchema);
module.exports = Movie;