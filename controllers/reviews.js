const Movie = require('../models/movie')

const reviewsController = {
    create: async (req, res)=>{
        try{
            // get the movie to attach the review to
            const movie = await Movie.findById(req.params.movie_id)
            // attach the review data to the movie
            const reviewToCreate = req.body
            movie.reviews.push(reviewToCreate)
            // save the movie to the database
            await movie.save()
            // return the user to the movie show page
            res.redirect(`/movies/${req.params.movie_id}`)
        }catch(err){
            res.send(err)
        }
    }
}

module.exports = reviewsController