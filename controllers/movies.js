const Movie = require('../models/movie')
const Performer = require('../models/performer')

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
                                 .populate('cast')
        // get all performers so we can populate the dropdown
        const performers = await Performer.find();
        // send it to the template
        res.render('movies/show', {
            movie: movie,
            performers
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
    },
    addPerformer: async (req, res) => {
        try{
            if(!req.body.performerId){
                throw new Error("must have performer id")
            }
            // grab the movie we are adding the performer to
            const movie = await Movie.findById(req.params.id)
            // add the performerId to the array of ids in movie
            movie.cast.push(req.body.performerId) 
            // save the movie
            await movie.save()
            // redirect to the show page
            res.redirect(`/movies/${movie._id}`)
        }catch(err){
            res.send(err)
        }

    }
}

module.exports = moviesController