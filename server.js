// load the process.env.VARIABLEs 
require('dotenv').config()
// connect mongoose to the mongodb cloud database
require('./config/database-connect')
const express = require('express')
const app = express();

// load and mount middleware
const moviesRouter = require('./routes/movies')
const morgan = require('morgan')

app.set('view engine', 'ejs')
app.use(morgan('dev'))
// ANY route starting with /movies in the url...
// Send it over to the moviesRouter to complete the job
app.use('/movies', moviesRouter)

app.get('/', (req, res)=>{
    res.render('home-page')
})

app.listen(3000, ()=>{
    console.log("express is running, better go catch it")
})
