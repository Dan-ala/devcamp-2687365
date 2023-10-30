const express = require('express')
const router3 = express.Router()

//REVIEWS
router3.get('/', (request, response)=>{
    response.json(
        {
            success:true,
            msg: "Aquí se traerán todos los reviews"
        }
    )
})

router3.get('/:id', (req, res)=>{
    res.json(
        {
            success: true,
            msg: `Aquí se traerá el review cuyo id es: ${req.params.id}`
        }
    )
})

router3.post('/', (req, res)=>{
    res.json(
        {
            success: true,
            msg: `Aquí se creará un review`
        }
    )
})

router3.put('/:id', (req, res)=>{
    res.json(
        {
            success: true,
            msg: `Aquí se editará el review cuyo id es: ${req.params.id}`
        }
    )
})

router3.delete('/:id', (req, res)=>{
    res.json(
        {
            success: true,
            msg: `Aquí se eliminará el review cuyo id es: ${req.params.id}`
        }
    )
})

module.exports = router3