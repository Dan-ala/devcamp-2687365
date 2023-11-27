const express = require('express')
const router4 = express.Router()
const userModel = require('../models/userModel')
const mongoose = require('mongoose')

//USERS
router4.get("/", async (req, res) => {
    try {
      const users = await userModel.find();
      if (users.length === 0) {
        res.status(400).json({
          success: false,
          msg: "There are not users",
        });
      } else {
        res.status(200).json({
          success: true,
          msg: "There you have all your users",
          data: users,
        });
      }
    } catch (error) {
      res.status(500).json({
        success: false,
        msg: `Server is not working properly ${error.message}`
      });
    }
  });
  
  router4.get('/:id', async (req, res)=>{
    try{
      //Validating an Id for Mongoose
      if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        res.status(400).json({
          success: false,
          msg: `${req.params.id} id invalid`,
        });
      } else {
        const user = await userModel.findById(req.params.id);
        if (!user) {
          res.status(400).json({
            success: false,
            msg: `There is not any user. ${req.params.id}`,
          });
        } else {
          res.status(200).json({
            success: true,
            msg: "There you have your user",
            data: user,
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
  
  router4.post("/", async (req, res) => {
    //Add a new user
    try {
      const newUser = await userModel.create(req.body);
      res.status(201).json({
        success: true,
        msg: "A new user has been created.",
        data: newUser,
      });
    } catch (error) {
      res.
      status(500).json({
        success: false,
        msg: `${error.message}`,
      });
    }
  });
  
  router4.put("/:id", async (req, res) => {
  const id = req.params.id
    try {
      //Validating an Id for Mongoose
      if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(400).json({
          success: false,
          msg: `${id} id invalid`,
        });
      } else {
          const editUser = await userModel.findByIdAndUpdate(
              id,
              req.body,
              { new: true }
            );
          if(!editUser){
              res.
              status(400).json({
                  success: false,
                  msg: `The user does not exist`
              })
          }else{
              //If the bootcamp exists
              res.
              status(200).json({
                  success: true,
                  data: editUser,
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
  
  router4.delete("/:id", async (req, res) => {
      const id = req.params.id
      try{
          if (!mongoose.Types.ObjectId.isValid(id)) {
            res.
            status(400).json({
              success: false,
              msg: `${id} id invalid`,
            });
          } else {
              const deleteUser = await userModel.findByIdAndDelete(id);
              if(!deleteUser){
                  res.
                  status(400).json({
                      success: false,
                      msg: `The user id does not exist`
                  })
  
              }else{
                  res.
                  status(200).json({
                      success: true,
                      msg: `The user has been deleted`,
                      data: deleteUser,
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
  
  module.exports = router4;