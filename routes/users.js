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
  router.get("/:id", async (req, res,next) =>{
    //Takes the Id
    const{ id } = req.params;
    //Query the database
    try{
      const user = await User.findByPk(id, {include: Exercise});
      //send back the student as a repsonse
      res.status(200).json(user);
    } catch(err){
       // if error:
      // handle error
      next(err);
    }
  });
  
  router.post("/", async (req, res,next) =>{
    //Take the form data
    const { firstName, lastName, email, weight,weightGoal, height, age, birthday} = req.body;
  
    //Create a new user entity//
    const userObj = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      weight:weight,
      weightGoal: weightGoal,
      height: height,
      age: age,
      birthday: birthday
      // password: password
    };
    try {
      const newUser = await User.create(userObj);
      res.status(201).send(newUser);
    } catch(err){
      next(err);
    }
  });
  
  router.put("/:id", async (req,res,next) => {
    const { id } = req.params;
    const { firstName, lastName, email, weight, password, weightGoal, height, age, birthday} = req.body;
  
    const updatedObj = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      weight:weight,
      password: password,
      weightGoal: weightGoal,
      height: height,
      age: age,
      birthday: birthday
    };
    try{
      const user = await User.findByPk( id );
      await user.set(updatedObj);
      const updatedUser = await user.save();
      res.status(201).send(updatedUser);
    } catch (err) {
      next(err);
    }
  })
  
  router.delete("/:id", async(req, res, next) => {
    const { id } = req.params;
    try{
      const user = await User.findByPk(id);
      await user.destroy();
      res.sendStatus(204);
    } catch(err) {
      next(err);
    }
  });
  module.exports = router;