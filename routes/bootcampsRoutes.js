const express = require('express')
const bootcampModel = require('../models/bootcampModel')
const router = express.Router()

//URI
router.get('/', async (req, res)=>{

    try{
        const bootcamps = await bootcampModel.find()
        if(bootcamps.length === 0){
            res.
            status(400).json({
                success: false,
                msg: 'There are not bootcamps'
            })
        }else{
            res.
            status(200).json(
                {
                    success:true,
                    msg: 'There you have all your bootcamps',
                    data: bootcamps
                }
            )
        }
    }catch(error){
        res.
        status(500).json({
            success: false,
            msg: `Server is not working properly ${error.message}`
        })
    }

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

router.put('/:id', async (req, res)=>{
    const editBootcamp = await bootcampModel.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
        )
    res.json(
        {
            success: true,
            data: editBootcamp
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