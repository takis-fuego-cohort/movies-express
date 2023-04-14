const { find } = require('../models/movie')
const Movie = require('../models/movie')

const moviesController = {
    index: async (req, res)=>{
        // Get the movies from the database
        const movies = await Movie.find();   
        // Put them into the template
        res.render('movies/index', {
            movies: movies
        })
    }
}

module.exports = moviesController