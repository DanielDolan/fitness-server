var express = require("express");
var router = express.Router();
const { Exercise, User } = require("../database/models");

/* GET all exercises. */
// /api/exercises
router.get("/", async (req, res, next) => {
  try {
    const exercises = await Exercise.findAll({ include: User });
    // if exercises is valid, it will be sent as a json response
    console.log(exercises);
    res.status(200).json(exercises);
  } catch (err) {
    next(err);
  }
});

//exercise based on its id

router.get("/:id", async (req, res, next) => {
  
  const { id } = req.params;

  try {
    const exercise = await Exercise.findByPk(id, { include: User });
    res.status(200).json(exercise);
  } catch (err) {
    next(err);
  }
});

//get users associated with exercises
router.get("/:id/users", async (req, res, next) => {
  const { id } = req.params;
  // find the campus associated with the id
  let foundExercise;
  try {
    foundExercise = await Exercise.findByPk(id);
  } catch (err) {
    next(err);
  }

  try {
    const usersOfExercise = await foundExercise.getUsers();
    res.status(200).json(usersOfExercise);
  } catch (err) {
    next(err);
  }

//send back array of users
});


// Route to handle adding a exercise
// /api/exercises/
router.post("/", async (req, res, next) => {
  // Take the form data from the request body
  const { Name, MuscleGroup, description, RecomendedReps } = req.body;
  // Create a exercise obj
  const exerciseObj = {
    Name: Name,
    MuscleGroup: MuscleGroup,
    description: description,
    RecomendedReps: RecomendedReps,
  };
  try {
    // Create a new campus on the database
    const newExercise = await Exercise.create(exerciseObj);
    // The database would return a exercise
    // send that exercise as a json to the client
    res.status(201).send(newExercise);
  } catch (err) {
    next(err);
  }
});

//edit exercise

router.put("/:id", async (req, res, next) => {
  // get the id from request params
  const { id } = req.params;
  // get form data from the request body
  const { name, MuscleGroup, description, RecomendedReps } = req.body;
  const updatedObj = {
    name: name,
    MuscleGroup: MuscleGroup,
    description: description,
    RecomendedReps: RecomendedReps,
  };
  try {
    // if successfull:
    // Find a exercise with matching id from database
    const exercise = await Exercise.findByPk(id, { include: User });
    // database would return a valid campus object or an error
    console.log(updatedObj);
    // modify the exercise object with new form data
    await exercise.set(updatedObj);
    // save the new campus object to the data
    // database would return a new exercise object
    const updatedExercise = await exercise.save();
    console.log(updatedExercise);
    // send the newExercise as a response from the API
    res.status(201).send(updatedExercise);
  } catch (err) {
    // if error:
    // handle the error
    next(err);
  }
});

// Route to handle removing a exercise
router.delete("/:id", async (req, res, next) => {
  const { id } = req.params;
  // get an id for an exercise to delete
  try {
    // pass the id to the database to find campus to be deleted
    // database would either respond succcess or fail
    const exercise = await Exercise.findByPk(id);
    // invoke the .destroy() method on the returned campus
    await Exercise.destroy();
    // send a success message to the client
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});


module.exports = router;