//require express module
const express = require('express')
//require mongoose
const mongoose = require('mongoose')
//require cors
const cors = require('cors')
//require database configuaration logic
//db will be the actual Mongo URI as a string

// require middleware
const replaceToken = require('./lib/replace_token')


const bodyparser=require('body-parser');

const db = require('./config/db')

// require configured passport authentication middleware
const auth = require('./lib/auth')

// define server and client ports
// used for cors and local port declaration
const serverDevPort = 4741
const clientDevPort = 7165

//requiring userRoutes
const userRoutes = require('./routes/userRoutes')
const authRoutes = require('./routes/authRoutes')
const doctorRoutes = require('./routes/doctorRoutes')
const reviewRoutes = require('./routes/reviewRoutes')

//connect to mongodb 
mongoose.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

//crate new express application
const app = express()

// set CORS headers on response from this API using the `cors` NPM package
// `CLIENT_ORIGIN` is an environment variable that will be set on Heroku
app.use(cors({ origin: process.env.CLIENT_ORIGIN || `http://127.0.0.1:${clientDevPort}` }))

// define port for API to run on
const port = process.env.PORT || serverDevPort

// this middleware makes it so the client can use the Rails convention
// of `Authorization: Token token=<token>` OR the Express convention of
// `Authorization: Bearer <token>`
app.use(replaceToken)

// register passport authentication middleware
app.use(auth)

// middleware requests
app.use(express.json())
app.use(bodyparser.json())
// this parses requests sent by `$.ajax`, which use a different content type
app.use(express.urlencoded({ extended: true })) 

//using userRoutes in our app.
app.use(cors())
app.use(userRoutes)
app.use(doctorRoutes)
app.use(reviewRoutes)
app.use(authRoutes)

//start application on port 4741
app.listen(port, () => {
    console.log('listening on port ' + port)
})