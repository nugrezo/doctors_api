//require express module
const express = require('express')

//require mongoose
const mongoose = require('mongoose')

//requiring userRoutes
const userRoutes = require('./routes/userRoutes')
const doctorRoutes = require('./routes/doctorRoutes')

//connect to mongodb 
mongoose.connect('mongodb://127.0.0.1/restaurant_api', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

//crate new express application
const app = express()

// middleware requests
app.use(express.json())

//using userRoutes in our app.
app.use(userRoutes)
app.use(doctorRoutes)

//start application on port 4741
app.listen(4741, () => console.log('App listening on port 4741'))
