const express = require('express')
const dotenv = require('dotenv')
const colors = require('colors')
const connectDB = require('./config/db')

//Routes dependencies
const bootcampsRoutes = require('./routes/bootcampsRoutes')
const coursesRoutes = require('./routes/coursesRoutes')
const reviewsRoutes = require('./routes/reviewsRoutes')
const usersRoutes = require('./routes/usersRoutes')

//Configurar variables de entorno
dotenv.config(
    {
        path: './config/.env'
    }
)


//Calling the function
connectDB()

//Objecto app
const app = express()
app.use(express.json())

//Pairing routes
app.use('/bootcamps', bootcampsRoutes)
app.use('/courses', coursesRoutes)
app.use('/reviews', reviewsRoutes)
app.use('/users', usersRoutes)


//prueba de URL
app.get('/test', (request, response)=>{ //This is an endpoint
    response.send('Hello there!')
})

//ruta parametrizada
app.get('/test/:id', (request, response)=>{ //This is an endpoint
    response.send(`Parámetro enviado: ${request.params.id}`)
})

//Tomar variable - puerto del entorno
const port = process.env.PORT


//Servidor de Dev
app.listen(port, function(){
    console.log(`The server is being executed... ${port}`.bgMagenta.black.inverse.bold)
})