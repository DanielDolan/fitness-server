var express = require("express");
var router = express.Router();
const { Exercise, User } = require("../database/models");


//Route to get All Students//
router.get("/", async (req,res, next) => {
    try{
      const users = await User.findAll({ include: Exercise});
      console.log(users);
      res.status(200).json(users);
    }catch(err){
      next(err);
    }
  });
  module.exports = router;