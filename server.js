// load the process.env.VARIABLEs 
require('dotenv').config()
// connect mongoose to the mongodb cloud database
require('./config/database-connect')
const path = require('path');
const express = require('express')
const app = express();

// load and mount middleware
const moviesRouter = require('./routes/movies')
const reviewsRouter = require('./routes/reviews')
const morgan = require('morgan')
const methodOverride = require('method-override')

app.set('view engine', 'ejs')
// override with POST having ?_method=DELETE
app.use(methodOverride('_method'))
app.use(morgan('dev'))
// lets us use static files
app.use(express.static(path.join(__dirname, 'public')));
// Gives us form data as req.body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// Log req.body if there is one
app.use((req, res, next)=>{
    if(req.method.toLowerCase() === "post"){
        console.log(req.body)
    }
    next();
})

// ANY route starting with /movies in the url...
// Send it over to the moviesRouter to complete the job
app.use('/movies', moviesRouter)


// Reviews Router will have to handle various request urls:
// /movies/movie_id/reviews
// /reviews/:review_id
// /reviews
app.use('/', reviewsRouter)

app.get('/', (req, res)=>{
    res.render('home-page')
})

app.listen(3000, ()=>{
    console.log("express is running, better go catch it")
})
