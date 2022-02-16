const express = require('express')
const router = express.Router()
const User = require('./../models/userModel')

//CREATE
//POST /users/
router.post('/users', (req, res, next) => {
    const userData = req.body.user
    User.create(userData)
        .then(user => res.status(201).json({ user: user }))
        .catch(next)
})

//INDEX
//GET / users/ 
//We will get all users created.
router.get('/users', (req, res, next) => {
    User.find()
        .then(users => res.json({ users: users }))
        .catch(next)
})

//SHOW
// GET/ users/:id
//We will get a single user with this api request.
router.get('/users/:id', (req, res, next) => {
    const id = req.params.id
    User.findById(id)
        .then(user => res.json({ user: user }))
        .catch(next)
})

//UPDATE 
// PATCH /users/:id
//We will update user information with this api call.
router.patch('/users/:id', (req, res, next) => {
    const id = req.params.id
    const userData = req.body.user
    User.findById(id)
        .then(user => user.updateOne(userData))
        .then(() => res.sendStatus(204))
        .catch(next)
})

//DELETE
//DELETE / users/:id
//We will delete a user information with it`s id with below api call
router.delete('/users/:id', (req, res, next) => {
    const id = req.params.id
    User.findById(id)
        .then(user => user.deleteOne())
        .then(res.sendStatus(204))
        .catch(next)
})

module.exports = router
