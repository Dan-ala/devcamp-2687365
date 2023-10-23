const express = require('express')
const router = express.Router()

//URI
router.get('/', (request, response)=>{
    response.json(
        {
            success:true,
            msg: "Aquí se traerán todos los Bootcamps"
        }
    )
})

router.get('/:id', (req, res)=>{
    res.json(
        {
            success: true,
            msg: `Aquí se traerá el bootcamp cuyo id es: ${req.params.id}`
        }
    )
})

router.post('/', (req, res)=>{
    res.json(
        {
            success: true,
            msg: `Aquí se creará un bootcamp`
        }
    )
})

router.put('/:id', (req, res)=>{
    res.json(
        {
            success: true,
            msg: `Aquí se editará el bootcamp cuyo id es: ${req.params.id}`
        }
    )
})

router.delete('/:id', (req, res)=>{
    res.json(
        {
            success: true,
            msg: `Aquí se eliminará el bootcamp cuyo id es: ${req.params.id}`
        }
    )
})

module.exports = router