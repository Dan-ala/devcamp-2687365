const express = require("express");
const bootcampModel = require("../models/bootcampModel");
const mongoose = require("mongoose");
const router = express.Router()

//URI
router.get("/", async (req, res) => {
  try {
    const bootcamps = await bootcampModel.find();
    if (bootcamps.length === 0) {
      res.status(400).json({
        success: false,
        msg: "There are not bootcamps",
      });
    } else {
      res.status(200).json({
        success: true,
        msg: "There you have all your bootcamps",
        data: bootcamps,
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      msg: `Server is not working properly ${error.message}`
    });
  }
});

router.get("/:id", async (req, res) => {
  //Get a bootcamp by id

  try {
    //Validating an Id for Mongoose
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      res.status(400).json({
        success: false,
        msg: `${req.params.id} id invalid`,
      });
    } else {
      const bootcamp = await bootcampModel.findById(req.params.id);
      if (!bootcamp) {
        res.status(400).json({
          success: false,
          msg: `There is not any bootcamp. ${req.params.id}`,
        });
      } else {
        res.status(200).json({
          success: true,
          msg: "There you have your bootcamp",
          data: bootcamp,
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

router.post("/", async (req, res) => {
  //Add a new bootcamp
  try {
    const newBootcamp = await bootcampModel.create(req.body);
    res.status(201).json({
      success: true,
      msg: "A new bootcamp has been created.",
      data: newBootcamp,
    });
  } catch (error) {
    res.
    status(500).json({
      success: false,
      msg: `${error.message}`,
    });
  }
});

router.put("/:id", async (req, res) => {
const id = req.params.id
  try {
    //Validating an Id for Mongoose
    if (!mongoose.
        Types.
        ObjectId.
        isValid(id)) {
      res.
      status(400).json({
        success: false,
        msg: `${id} id invalid`,
      });
    } else {
        const editBootcamp = await bootcampModel.findByIdAndUpdate(
            id,
            req.body,
            { new: true }
          );
        if(!editBootcamp){
            res.
            status(400).json({
                success: false,
                msg: `The bootcamp does not exist`
            })
        }else{
            //If the bootcamp exists
            res.
            status(200).json({
                success: true,
                data: editBootcamp,
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

router.delete("/:id", async (req, res) => {
    const id = req.params.id
    try{
        if (!mongoose.
            Types.
            ObjectId.
            isValid(id)) {
          res.
          status(400).json({
            success: false,
            msg: `${id} id invalid`,
          });
        } else {
            const deleteBootcamp = await bootcampModel.findByIdAndDelete(
                id
              );
            if(!deleteBootcamp){
                res.
                status(400).json({
                    success: false,
                    msg: `The bootcamp id does not exist`
                })

            }else{
                res.
                status(200).json({
                    success: true,
                    msg: `The bootcamp has been deleted`,
                    data: deleteBootcamp,
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

module.exports = router;
