const express = require('express')
const courseModel = require('../models/courseModel')
const bootcampModel = require("../models/bootcampModel");
const mongoose = require('mongoose')
const router2 = express.Router()

//COURSES
router2.get('/', async (req, res)=>{
    try{
        const courses = await courseModel.find()
        if(courses.length === 0){
            res.
            status(400).json({
                success: false,
                msg: 'There are not courses'
            })
        }else{
            res.
            status(200).json({
                success: true,
                msg: "There you have all your courses",
                data: courses, 
            })
        }
    }catch (error){
        res.
        status(500).json({
            success: false,
            msg: `Server is not working properly ${error.message}`
        })
    }
    res.json(
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

router2.post('/', async (req, res)=>{
    const id = req.params.id
    try{
        const newCourse = await courseModel.create(req.body)
        const gettingBootcamp = await bootcampModel.findById(id)
        const url = `${newCourse}/${gettingBootcamp}`
        https.get(url,res=>{
            body=JSON.stringify(res)
            console.log(body)
        })
        res.status(201).json({
            success: true,
            msg: 'A new course has been created',
            data: newCourse
        })
    }catch(error){
        res.status(500).json({
            success: false,
            msg: `${error.message}`
        })
    }
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