const mongoose = require('mongoose')

//función de conexión
const connectDB = async () =>{
    await mongoose.connect(process.env.MONGO_URL)
    console.log('MongoDB has been connected! 🎶 🎸'.bgYellow.black.inverse.bold)
}

module.exports = connectDB