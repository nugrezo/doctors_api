const express = require('express')
const router = express.Router()

//require Doctor model 
const Doctor = require('./../models/doctorModel')


//CREATE
//POST /review/
router.post('/review', (req, res, next) => {
      // get the review data from the body of the request
    const reviewData = req.body.review
      // get the doctor id from the body
    const doctorId = reviewData.doctorId
        Doctor.findById(doctorId)
        .then(doctor => {
            // add review to doctor
            doctor.review.push(reviewData)
            // save doctor
            return doctor.save()
        })
        .then(doctor => res.status(201).json({ doctor: doctor }))
        .catch(next)
})

//UPDATE 
// PATCH /review/:id
//We will update review information with this api call.
router.patch('/review/:id', (req, res, next) => {
    const id = req.params.id
    const reviewData = req.body.review
    Doctor.findOne({ 'review._id': id })
        .then(doctor => {
            const review = doctor.review.id(id)
            review.set(reviewData)
            return doctor.save()
        })
        .then(() => res.sendStatus(204))
        .catch(next)
})


//DELETE
//DELETE / reviw/:id
//We will delete a review information with it`s id with below api call
router.delete('/review/:id', (req, res, next) => {
    const id = req.params.id
    Doctor.findOne({ 'reviews._id': id })
        .then(doctor => {
            doctor.review.id(id).remove()
            return doctor.save()
        })
        .then(() => res.sendStatus(204))
        .catch(next)
})



module.exports = router