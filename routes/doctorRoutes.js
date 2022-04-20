const express = require('express')
const router = express.Router()
const passport = require('passport')
const requireToken = passport.authenticate('bearer', { session: false })
const customErrors = require('./../lib/custom_errors')
const requireOwnership = customErrors.requireOwnership

//require Doctor model 
const Doctor = require('./../models/doctorModel')

//CREATE
//POST /doctors/
router.post('/doctors', requireToken, (req, res, next) => {
    req.body.doctor.owner = req.user._id
    const doctorData = req.body.doctor
    console.log(doctorData)
    Doctor.create(doctorData)
        .then(doctor => res.status(201).json({ doctor: doctor }))
        .catch(next)
})

//INDEX
//GET /doctors/ 
//We will get all doctors created by user
router.get('/doctors', requireToken, (req, res, next) => {
    Doctor.find({ owner: req.user.id })
        .then(doctors => {
        // `examples` will be an array of Mongoose documents
        // we want to convert each one to a POJO, so we use `.map` to
        // apply `.toObject` to each one            
            return doctors.map(doctor => doctor.toObject())
        })
        // .populate('owner')
        // .populate('review.owner')
        // respond with status 200 and JSON of the examples   
        .then(doctors => res.status(200).json({ doctors: doctors }))
        // if an error occurs, pass it to the handler
        .catch(next)
})

//SHOW
// GET/ doctors/:id
//We will get a single user with this api request.
router.get('/doctors/:id', requireToken, (req, res, next) => {
    const id = req.params.id
    Doctor.findById(id)
        .populate('owner')
        .then(doctor => res.json({ doctor: doctor }))
        .catch(next)
})

//UPDATE 
// PATCH /users/:id
//We will update user information with this api call.
router.patch('/doctors/:id', requireToken, (req, res, next) => {
    const id = req.params.id
    console.log('req.params is', req.params)
    const doctorData = req.body.doctor
    console.log('Update doctorData is', doctorData)
    Doctor.findById(id)
        .then(doctor => {
            requireOwnership(req, doctor)
            return doctor.updateOne(doctorData)
        })
        .then(doctor => res.json({ doctor: doctor }))
        .catch(next)
})

//DELETE
//DELETE / users/:id
//We will delete a user information with it`s id with below api call
router.delete('/doctors/:id', requireToken, (req, res, next) => {
    const id = req.params.id
    Doctor.findById(id)
        .then((doctor) => {
            requireOwnership(req, doctor)
            doctor.deleteOne()
        })
        .then(() => res.sendStatus(204))
        .catch(next)
})



module.exports = router
