const express = require('express')
const router = express.Router()

//require Doctor model 
const Doctor = require('./../models/doctorModel')

//CREATE
//POST /doctors/
router.post('/doctors', (req, res, next) => {
    const doctorData = req.body.doctor
    console.log(doctorData)
    Doctor.create(doctorData)
        .then(doctor => res.status(201).json({ doctor: doctor }))
        .catch(next)
})

//INDEX
//GET /doctors/ 
//We will get all doctors created by user
router.get('/doctors', (req, res, next) => {
    Doctor.find()
        // .populate('owner')
        // .populate('review.owner')
        .then(doctors => res.json({ doctors: doctors }))
        .catch(next)
})






//SHOW
// GET/ users/:id
//We will get a single user with this api request.


//UPDATE 
// PATCH /users/:id
//We will update user information with this api call.


//DELETE
//DELETE / users/:id
//We will delete a user information with it`s id with below api call




module.exports = router