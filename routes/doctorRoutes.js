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

module.exports = router
