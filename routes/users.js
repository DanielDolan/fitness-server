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

  // GET http://localhost:3001/api/user/:id/exercise;
// We want to get a list of all of the exercise from a particular user;

router.get('/:id/exercise', async (req, res, next) => {
  let foundUser;

  try {
    foundUser = await User.findOne({ where: { id: req.params.id } });
  }
  catch (err) {
    next(err);
  }

  let exerciseOfUser;

  try {
    exerciseOfUser = await foundUser.getExercises();  // remember those methods Sequelize provides?;
  }
  catch (err) {
    next(err);
  }

  res.status(200).json(exerciseOfUser);
});

router.post('/addExercise', async (req, res, next) => {
  let foundUser,foundExercise;
  console.log("req : ",req.body.userID)
  console.log("req : ",req.body.exerciseID)
  try {
     foundUser = await User.findOne({ where: { id: req.body.userID } });
     foundExercise = await Exercise.findOne({where: {id: req.body.exerciseID}});
  }
  catch (err) {
    next(err);
  }

  let exerciseOfUser;
   console.log("found exercise:    ",foundExercise)

  try {
     exerciseOfUser = await foundUser.addExercise(foundExercise);  // remember those methods Sequelize provides?;
  }
  catch (err) {
    next(err);
  }

  res.status(200).json(exerciseOfUser);
});

router.post('/removeExercise', async (req, res, next) => {
  let foundUser,foundExercise;
  console.log("req : ",req.body.userID)
  try {
     foundUser = await User.findOne({ where: { id: req.body.userID } });
     foundExercise = await Exercise.findOne({where: {id: req.body.exerciseID}});
  }
  catch (err) {
    next(err);
  }

  let exerciseOfUser;
   console.log("found exercise:    ",foundExercise)

  try {
     await foundUser.removeExercise(foundExercise);  // remember those methods Sequelize provides?;
  }
  catch (err) {
    console.log("++++++++++++++error++++++++++++++++")
    next(err);
  }

  res.status(200).json(exerciseOfUser);
});

  module.exports = router;