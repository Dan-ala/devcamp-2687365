const express = require('express')
const courseModel = require('../models/courseModel')
const mongoose = require('mongoose')
const router2 = express.Router()

//COURSES
router2.get('/', async (req, res)=>{
    try{
        const courses = await courseModel.find()
        if(courses.length === 0){
            res.status(400).json({
                success: false,
                msg: 'There are not courses'
            })
        }else{
            res.status(200).json({
                success: true,
                msg: "There you have all your courses",
                data: courses, 
            })
        }
    }catch (error){
        res.status(500).json({
            success: false,
            msg: `Server is not working properly ${error.message}`
        })
    }
})

router2.get('/:id', async (req, res)=>{
    try{
        if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
            res.status(400).json({
              success: false,
              msg: `${req.params.id} id invalid`,
            });
          } else {
            const course = await courseModel.findById(req.params.id);
            if (!course) {
              res.status(400).json({
                success: false,
                msg: `There is not any course. ${req.params.id}`,
              });
            } else {
              res.status(200).json({
                success: true,
                msg: "There you have your course",
                data: course,
              });
            }
          }
        } catch (error) {
          res.status(500).json({
            success: false,
            msg: `Server is not working properly ${error.message}`,
          });
    }
});

router2.post('/', async (req, res)=>{
    try{
        const newCourse = await courseModel.create(req.body)
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
})

router2.put("/:id", async (req, res) => {
    const id = req.params.id
      try {
        //Validating an Id for Mongoose
        if (!mongoose.Types.ObjectId.isValid(id)) {
          res.status(400).json({
            success: false,
            msg: `${id} id invalid`,
          });
        } else {
            const editCourse = await courseModel.findByIdAndUpdate(
                id,
                req.body,
                { new: true }
              );
            if(!editCourse){
                res.
                status(400).json({
                    success: false,
                    msg: `The course does not exist`
                })
            }else{
                //If the course exists
                res.
                status(200).json({
                    success: true,
                    data: editCourse,
                  });
            }
        }
      } catch (error) {
        res.
        status(500).json({
            success: false,
            msg: `${error.message}`,
          });
      }
    });

router2.delete("/:id", async (req, res) => {
    const id = req.params.id
    try{
        if (!mongoose.Types.ObjectId.isValid(id)) {
          res.status(400).json({
            success: false,
            msg: `${id} id invalid`,
          });
        } else {
            const deleteCourse = await courseModel.findByIdAndDelete(
                id
              );
            if(!deleteCourse){
                res.
                status(400).json({
                    success: false,
                    msg: `The course id does not exist`
                })

            }else{
                res.
                status(200).json({
                    success: true,
                    msg: `The course has been deleted`,
                    data: deleteCourse,
                  });
            }
        }
    }catch(error){
        res.
        status(500).json({
            success: false,
            msg: `${error.message}`,
          });
    }
});

module.exports = router2