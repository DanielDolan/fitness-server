var express = require("express");
var router = express.Router();
const { Exercise, User } = require("../database/models");

/* GET all exercises. */
// /api/campuses
router.get("/", async (req, res, next) => {
  // try to get campuses object from database
  try {
    // campuses will be the result of the Campus.findAll promise
    const exercises = await Exercise.findAll({ include: User });
    // if campuses is valid, it will be sent as a json response
    console.log(exercises);
    res.status(200).json(exercises);
  } catch (err) {
    // if there is an error, it'll passed via the next parameter to the error handler middleware
    next(err);
  }
});

// Route to serve single campus based on its id
// /api/campuses/:id
// /api/campuses/456 would respond with a campus with id 456

router.get("/:id", async (req, res, next) => {
  // take the id from params
  const { id } = req.params;
  // query the database for a campus with matching id
  try {
    // if successful:
    const exercise = await Exercise.findByPk(id, { include: User });

    // send back the campus as a response
    res.status(200).json(exercise);
  } catch (err) {
    // if error:
    // handle error
    next(err);
  }
});

// Route to get students associated with a campus
// /api/campuses/:id/students
// /api/campuses/456/students
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

  // find the students associated with the campus
  // send back an array of students
});


// Route to handle adding a campus
// /api/campuses/
router.post("/", async (req, res, next) => {
  // Take the form data from the request body
  const { Name, MuscleGroup, description, RecomendedReps } = req.body;
  // Create a campus object
  const campusObj = {
    Name: Name,
    MuscleGroup: MuscleGroup,
    description: description,
    RecomendedReps: RecomendedReps,
  };
  try {
    // Create a new campus on the database
    const newExercise = await Exercise.create(exerciseObj);
    // The database would return a campus
    // send that campus as a json to the client
    res.status(201).send(newExercise);
  } catch (err) {
    next(err);
  }
});

// Route to handle editing a campus
// /api/campuses/:id
// /api/campuses/456 would modify a campus with id 456

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
    // Find a campus with a matching id from the database
    const exercise = await Exercise.findByPk(id, { include: User });
    // database would return a valid campus object or an error
    console.log(updatedObj);
    // modify the campus object with new form data
    await exercise.set(updatedObj);
    // save the new campus object to the data
    // database would return a new campus object
    const updatedExercise = await exercise.save();
    console.log(updatedExercise);
    // send the newCampus as a response from the API
    res.status(201).send(updatedExercise);
  } catch (err) {
    // if error:
    // handle the error
    next(err);
  }
});

// Route to handle removing a campus
router.delete("/:id", async (req, res, next) => {
  const { id } = req.params;
  // get an id for a campus to delete
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