const mongoose = require('mongoose')

const authSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    hashedPassword: {
        type: String,
        required: true
    },
    token: String
}, {
    timestamps: true,
    toObject: {
        transform: (_doc, user) => {
            delete user.hashedPassword
            return user 
        }
    }
})

module.exports = mongoose.model('Auth', authSchema)
