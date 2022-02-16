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
// GET/ doctors/:id
//We will get a single user with this api request.
router.get('/doctors/:id', (req, res, next) => {
    const id = req.params.id
    Doctor.findById(id)
        .then(doctor => res.json({ doctor: doctor }))
        .catch(next)
})

//UPDATE 
// PATCH /users/:id
//We will update user information with this api call.
router.patch('/doctors/:id', (req, res, next) => {
    const id = req.params.id
    const doctorData = req.body.doctor
    Doctor.findById(id)
        .then(doctor => doctor.updateOne(doctorData))
        .then(() => res.sendStatus(204))
        .catch(next)
})

//DELETE
//DELETE / users/:id
//We will delete a user information with it`s id with below api call
router.delete('/doctors/:id', (req, res, next) => {
    const id = req.params.id
    Doctor.findById(id)
        .then(doctor => doctor.deleteOne())
        .then(() => res.sendStatus(204))
        .catch(next)
})



module.exports = router
