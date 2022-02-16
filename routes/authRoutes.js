const express = require('express')
const router = express.Router()
const User = require('./../models/userModel')


//CREATE
//POST /sign-up/
router.post('/sign-up', (req, res, next) => {
    const userData = req.body.credentials
    if (userData.password === userData.passwordConfirmation) {
        return User.create(userData)
            .then(user => res.status(201).json({ user: user }))
            .catch(next)
    }
    else {
    throw new Error('A required paramater was missing')
  }
})




// router.post('/sign-up', (req, res, next) => {
//     const userData = req.body.credentials
    //if PW and PWC match
//     if (userData.password = userData.passwordConfirmation) {
//         return User.create({ email: userData.email, password: userData.password }
//             .then(user => res.status(201).json({ user: user })))
//             .catch(next)  
//     }
//     else {
//         throw new Error('A required parameter was missing')
//     }
// })

module.exports = router
