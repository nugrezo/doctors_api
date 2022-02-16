//require express module
const express = require('express')

//crate new express application
const app = express()

//define route GET to / that respinds with Hello World!

//start application on port 4741
app.listen(4741, () => console.log('App listening on port 4741'))
