const express = require('express')
const router2 = express.Router()

//COURSES
router2.get('/', (request, response)=>{
    response.json(
        {
            success:true,
            msg: "Aquí se traerán todos los Courses"
        }
    )
})

router2.get('/:id', (req, res)=>{
    res.json(
        {
            success: true,
            msg: `Aquí se traerá el course cuyo id es: ${req.params.id}`
        }
    )
})

router2.post('/', (req, res)=>{
    res.json(
        {
            success: true,
            msg: `Aquí se creará un course`
        }
    )
})

router2.put('/:id', (req, res)=>{
    res.json(
        {
            success: true,
            msg: `Aquí se editará el course cuyo id es: ${req.params.id}`
        }
    )
})

router2.delete('/:id', (req, res)=>{
    res.json(
        {
            success: true,
            msg: `Aquí se eliminará el course cuyo id es: ${req.params.id}`
        }
    )
})

module.exports = router2