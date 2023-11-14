const mongoose = require('mongoose')

//Define a module that only works with Mongoose
const bootcampSchema = new mongoose.Schema({
    name: {
        type: String,
        unique : true,
        required : [true , "Name required"],
        maxlength: [20 , "The name must have 20 characters!"]
    },
    phone: {
        type: Number,
        required : [true , "Phone number required"],
        max: [9999999999 , "The phone number, must have 10 characters"]
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
        "Devops",
        "IoT"
        ]
    },
    averageRating: Number,

    createdAt: {
        type: Date,
        required: 'Must have start date - default value is the created date'
    }
})

const Bootcamp = mongoose.model("Bootcamp",bootcampSchema)

module.exports = Bootcamp