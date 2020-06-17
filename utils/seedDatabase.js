//does not currenly have id for users, would create in user.js under routes
const { Exercise, User } = require("../database/models");

const seedDatabase = async () => {
  await Promise.all([
    Exercise.create({
      name: "Push Ups",
     muscleGroup: "Back, Chest",
      imageUrl: "https://unsplash.com/photos/EPrjIYQrpkU",
      description: "Users can push ther body in a upwards motion from the ground",
      recomendedReps: 5
    }),
    Exercise.create({
        name: "Bench Press",
        muscleGroup: "Chest",
        description: "Using a bench press, users can push up the bar and slowly repeat",
        recomendedReps: 7
    }),
    Exercise.create({
        name: "Hammer Curl",
       muscleGroup: "Arms, Tricep",
        description: "Using a dumbell users should ...",
        recomendedReps: 10
    
    }),
    User.create({ 
      firstName: "Daniel",
      lastName:"Dolan",
      email:"dolan@gmail.com",
      weight:170, 
      exerciseId:2
    }),
    User.create({ 
      firstName: "Dante",
      lastName:"Angelone",
      email:"dangelone@gmail.com",
      weight:165,
      exerciseId:1
     }),
  ]);
};

module.exports = seedDatabase;