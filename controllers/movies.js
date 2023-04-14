const Movie = require('../models/movie')

const moviesController = {
    index: async (req, res)=>{
        // Get the movies from the database
        const movies = await Movie.find();   
        // Put them into the template
        res.render('movies/index', {
            movies: movies
        })
    },
    new: (req, res) => {
        res.render('movies/new')
    },
    create: async (req, res) => {
        try{
            if(req.body.nowShowing === "on"){
                req.body.nowShowing = true
            }else{
                req.body.nowShowing = false
            }
            const newMovie = await Movie.create(req.body)
            res.redirect(`/movies/${newMovie._id}`)
        }catch(err){
            console.log(err);
            res.send(err)
        }
    }
}

module.exports = moviesController