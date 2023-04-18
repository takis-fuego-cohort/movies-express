require('dotenv').config({ path: '../.env' })
require('./database-connect')
const Performer = require('../models/performer');
// then-able
Performer.insertMany([
    {name: "Kristen Bell", born: Date.now()},
    {name: "Nick Kroll", born: Date.now()},
    {name: "Wanda Sykes", born: Date.now()},
    {name: "Leo", born: Date.now()},
    {name: "Toshiro Mifune", born: Date.now()},
]).then((dbResponse)=>{
    console.log(dbResponse)
}).catch((err)=>{
    console.log(err)
}).finally(()=>{
    process.exit()
})