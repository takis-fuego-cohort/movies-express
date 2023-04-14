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
    },
    show: async (req, res) => {
        // get the movie from the db
        const movie = await Movie.findById(req.params.id)
        // send it to the template
        res.render('movies/show', {
            movie: movie
        })
    },
    delete: async (req, res) => {
        try{
            const recentlyDeleteMovie = await Movie.findByIdAndDelete(req.params.id)
            res.redirect('/movies')
        }catch(err){
            res.send(err)
        }
    },
    edit: async (req, res) => {
        try{
            // get the movie from the db
            const movie = await Movie.findById(req.params.id)
            // send the movie to the template
            res.render('movies/edit', {
                movie: movie
            })
        }catch(err){
            res.send(err)
        }
    },
    update: async (req, res) => {
        try{
            if(req.body.nowShowing === "on"){
                req.body.nowShowing = true
            }else{
                req.body.nowShowing = false
            }
            // send req.body to the model for updating
            await Movie.findByIdAndUpdate(req.params.id, req.body)
            res.redirect(`/movies/${req.params.id}`)
        }catch(err){
            res.send(err)
        }
    }
}

module.exports = moviesController