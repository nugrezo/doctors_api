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

module.exports = router
