const express = require('express')
const bootcampModel = require('../models/bootcampModel')
const router = express.Router()

//URI
router.get('/', async (req, res)=>{
    const bootcamps = await bootcampModel.find()
    res.json(
        {
            success:true,
            data: bootcamps
        }
    )
})

router.get('/:id', async (req, res)=>{
    //Get a bootcamp by id
    const bootcamp = await bootcampModel.findById(req.params.id)
    res.json(
        {
            success: true,
            data: bootcamp
        }
    )
})

router.post('/', async (req, res)=>{
    //Add a new bootcamp
    const newBootcamp = await bootcampModel.create(req.body)

    res.json(
        {
            success: true,
            data: newBootcamp
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

router.delete('/:id', async (req, res)=>{
    const deleteBootcamp = await bootcampModel.deleteOne(bootcampModel.findById(req.params.id))
    res.json(
        {
            success: true,
            data: deleteBootcamp
        }
    )
})

module.exports = router