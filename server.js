// load the process.env.VARIABLEs 
require('dotenv').config()
// connect mongoose to the mongodb cloud database
require('./config/database-connect')
const express = require('express')
const app = express();

// load and mount middleware
const moviesRouter = require('./routes/movies')
const morgan = require('morgan')
const methodOverride = require('method-override')

app.set('view engine', 'ejs')
// override with POST having ?_method=DELETE
app.use(methodOverride('_method'))
app.use(morgan('dev'))
// Gives us form data as req.body
app.use(express.urlencoded({ extended: false }));
// ANY route starting with /movies in the url...
// Send it over to the moviesRouter to complete the job
app.use('/movies', moviesRouter)

app.get('/', (req, res)=>{
    res.render('home-page')
})

app.listen(3000, ()=>{
    console.log("express is running, better go catch it")
})
