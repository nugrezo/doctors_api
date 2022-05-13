'use strict'
// creating a base name for the mongodb
const mongooseBaseName = 'doctors_api'

// create the mongodb uri for development and test
const database = {
  development: `mongodb+srv://nugrezo:Soke1q2w!@cluster0.8mw14.mongodb.net/${mongooseBaseName}-development`,
  test: `mongodb://127.0.0.1/${mongooseBaseName}-test`
}

// Identify if development environment is test or development
// select DB based on whether a test file was executed before `server.js`
const localDb = process.env.TESTENV ? database.test : database.development

// Environment variable MONGODB_URI will be available in
// heroku production evironment otherwise use test or development db
const currentDb = process.env.DB_URI || localDb

module.exports = currentDb


