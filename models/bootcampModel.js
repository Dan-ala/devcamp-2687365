const mongoose = require('mongoose')

//Define a module that only works with Mongoose
const bootcampSchema = new mongoose.Schema({
    name: {
        type: String,
        unique : true,
        required : [true , "The Bootcamp is duplicated"],
        maxlength: [20 , "The name must have 20 characters!"]
    },
    phone: {
        type: Number,
        required : [true , "The phone is duplicated"],
        maxlength: [10 , "The phone number, must have 10 characters"]
    },
    address: {
        type: String,
        required : [true , "The adress is required"]
    },
    topics: {
        type: [String],
        enum: [ "AI", 
        "Backend Development", 
        "Frontend", 
        "Devops" 
    ]
    },
    averageRating: Number,

    createdAt: {
        type: Date,
        required: [true , "The creation date must be added"]
    }
})

const Bootcamp = mongoose.model("Bootcamp",bootcampSchema)

module.exports = Bootcamp