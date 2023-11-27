const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema({
    title: {
        type: String,
        unique: true,
        required: [true, 'Title required'],
        maxlength: [20, 'The title must have 20 characters']
    },
    text: {
        type: String,
        required: [true, 'Text required'],
        maxlength: [50, 'Maximum text with 50 characters!']
    },
    rating: {
        type: Number,
        required: [true, 'Rating required'],
        maxlength: [10, 'There must be only one rating between 1 to 10']
    },
    bootcamp_id: {
        type: String,
        unique: true,
        required: [true, 'The bootcamp id, must be in the table Bootcamp']
    },
    user_id: {
        type: String,
        unique: true,
        required: [true, 'The user id, must be in the table User']
    }
})

const Review = mongoose.model('Review',reviewSchema)
module.exports = Review