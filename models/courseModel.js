const mongoose = require('mongoose')

const courseSchema = new mongoose.Schema({
    title: {
        type: String,
        unique: true,
        required: [true, 'Title required'],
        maxlength: [30, 'The title must have 30 characters'],
        minlength: [10, 'The title must have at least 10 characters']
    },
    description: {
        type: String,
        required: [true, 'Description is requiered'],
        minlength: [10, 'The description must have at least 10 characters']
    },
    weeks: {
        type: Number,
        required: [true, 'The week is requiered'],
        max: [9, '9 is the maximum number of weeks']
    },
    enroll_cost: {
        type: Number,
        required: [true, 'The price for the enrollment is required']
    },
    minimum_skill: {
        type: [String],
        enum: [
            'Beginner',
            'Intermediate',
            'Advanced',
            'Expert'
        ],
        requiered: [true, 'You must select your skill level']
    }
})

const Course = mongoose.model('Course',courseSchema)
module.exports = Course