const express = require('express')
const router3 = express.Router()
const mongoose = require('mongoose')
const reviewModel = require('../models/reviewModel')
const bootcampModel = require('../models/bootcampModel')
const userModel = require('../models/userModel')

//REVIEWS
router3.get('/', async (req, res)=>{
    try{
        const reviews = await reviewModel.find()
        if(reviews.length === 0){
            res.status(400).json({
                success: false,
                msg: 'There are not reviews'
            })
        }else{
            res.status(200).json({
                success: true,
                msg: "There you have all your reviews",
                data: reviews, 
            })
        }
    }catch (error){
        res.status(500).json({
            success: false,
            msg: `Server is not working properly ${error.message}`
        })
    }
})

router3.get('/:id', async (req, res)=>{
    try{
        if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
            res.status(400).json({
              success: false,
              msg: `${req.params.id} id invalid`,
            });
          } else {
            const review = await reviewModel.findById(req.params.id);
            if (!review) {
              res.status(400).json({
                success: false,
                msg: `There is not any review. ${req.params.id}`,
              });
            } else {
              res.status(200).json({
                success: true,
                msg: "There you have your review",
                data: review,
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

router3.post('/', async (req, res)=>{
    const bootcampId = req.body.bootcamp_id;
    const userId = req.body.user_id;
    try{
        const gettingBootcamp = await bootcampModel.findById(bootcampId);
        const gettingUser = await userModel.findById(userId);

        if (!gettingBootcamp && !gettingUser) {
            return res.status(404).json({
                success: false,
                msg: 'Bootcamp or user not found'
            });
        }

        const newReview = await reviewModel.create({
            ...req.body,
            bootcamp: bootcampId,
            user: userId
        });

        res.status(201).json({
            success: true,
            msg: 'A new review has been created',
            data: newReview
        })
    }catch(error){
        res.status(500).json({
            success: false,
            msg: `${error.message}`
        })
    }
})

router3.put("/:id", async (req, res) => {
    const id = req.params.id
      try {
        //Validating an Id for Mongoose
        if (!mongoose.Types.ObjectId.isValid(id)) {
          res.status(400).json({
            success: false,
            msg: `${id} id invalid`,
          });
        } else {
            const editReview = await reviewModel.findByIdAndUpdate(
                id,
                req.body,
                { new: true }
              );
            if(!editReview){
                res.
                status(400).json({
                    success: false,
                    msg: `The review does not exist`
                })
            }else{
                //If the review exists
                res.
                status(200).json({
                    success: true,
                    data: editReview,
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

router3.delete("/:id", async (req, res) => {
    const id = req.params.id
    try{
        if (!mongoose.Types.ObjectId.isValid(id)) {
          res.status(400).json({
            success: false,
            msg: `${id} id invalid`,
          });
        } else {
            const deleteReview = await reviewModel.findByIdAndDelete(id);
            if(!deleteReview){
                res.
                status(400).json({
                    success: false,
                    msg: `The review id does not exist`
                })

            }else{
                res.
                status(200).json({
                    success: true,
                    msg: `The review has been deleted`,
                    data: deleteReview,
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

module.exports = router3