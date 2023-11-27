const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: [true, 'Name required'],
        maxlength: [50, 'The name must have 20 characters']
    },
    surname: {
        type: String,
        required: [true, 'Surname required'],
        maxlength: [50, 'Maximum text with 50 characters!']
    },
    age: {
        type: Number,
        required: [true, 'Age required'],
        maxlength: [3, 'You must enter your age']
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'You must enter an E-mail']
    },
    password: {
        type: String,
        unique: true,
        required: [true, 'You must have a password']
    }
})

const User = mongoose.model('User',userSchema)
module.exports = User