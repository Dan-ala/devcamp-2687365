const express = require('express')
const router4 = express.Router()

//USERS
router4.get('/', (request, response)=>{
    response.json(
        {
            success:true,
            msg: "Aquí se traerán todos los users"
        }
    )
})

router4.get('/:id', (req, res)=>{
    res.json(
        {
            success: true,
            msg: `Aquí se traerá el user cuyo id es: ${req.params.id}`
        }
    )
})

router4.post('/', (req, res)=>{
    res.json(
        {
            success: true,
            msg: `Aquí se creará un user`
        }
    )
})

router4.put('/:id', (req, res)=>{
    res.json(
        {
            success: true,
            msg: `Aquí se editará el user cuyo id es: ${req.params.id}`
        }
    )
})

router4.delete('/:id', (req, res)=>{
    res.json(
        {
            success: true,
            msg: `Aquí se eliminará el user cuyo id es: ${req.params.id}`
        }
    )
})

module.exports = router4