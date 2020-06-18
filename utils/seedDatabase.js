//does not currenly have id for users, would create in user.js under routes
const { Exercise, User } = require("../database/models");

const seedDatabase = async () => {
  await Promise.all([
    Exercise.create({
      name: "Push Ups",
     muscleGroup: "Chest",
      imageUrl: "https://images.unsplash.com/photo-1544216428-3d4ad849ae40?ixlib=rb-1.2.1&auto=format&fit=crop&w=3900&q=80",
      description: "Users can push ther body in a upwards motion from the ground",
      recomendedReps: 5
    }),
    Exercise.create({
        name: "Bench Press",
        muscleGroup: "Chest",
        imageUrl: "https://images.unsplash.com/photo-1534368959876-26bf04f2c947?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80",
        description: "Using a bench press, users can push up the bar and slowly repeat",
        recomendedReps: 7
    }),
    Exercise.create({
      name: "Pectoral Fly",
      muscleGroup: "Chest",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/2/24/Dumbbell-flys-2.png",
      description: "Using a dumbell or machine, users can lay flat, stretching out there arms horrizontally to strech the chest and contract its muscles.",
      recomendedReps: 7
  }),
  Exercise.create({
    name: "Side Plank",
   muscleGroup: "Abs",
   imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Side_Plank.jpg/900px-Side_Plank.jpg",
    description: "Laying directly on side, hold tightly to feel stretch of obliques.  ",
    recomendedReps: 10
  
  }),
  Exercise.create({
    name: "Crunches/Sit Ups",
   muscleGroup: "Abs",
   imageUrl: "https://www.publicdomainpictures.net/pictures/280000/velka/woman-doing-sit-ups-1538740104g5q.jpg",
    description: "Laying with knees in air and back on an angle, push the upper body towards the knee, contracting the abdominals. .  ",
    recomendedReps: 10
  
  }),
  Exercise.create({
    name: "Scissor kicks",
   muscleGroup: "Abs",
   imageUrl: "https://media.defense.gov/2009/Jun/01/2000561751/-1/-1/0/090527-F-7629T-002.JPG",
    description: "Laying with back slightly in the air, move the legs in a kicking motion contracting the abdominals ",
    recomendedReps: 10
  
  }),
  Exercise.create({
    name: "Bicep curling",
   muscleGroup: "Arms",
   imageUrl: "https://images.unsplash.com/photo-1578229353624-a4007142da75?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1300&q=80",
    description: "Can use a barbell or bar, simply curl the weight and squeeze for best results.",
    recomendedReps: 10
  
  }),
  Exercise.create({
    name: "Tricep Push Down",
   muscleGroup: "Arms",
   imageUrl: "https://images.unsplash.com/photo-1582442467598-c2cffc9b1d54?ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80",
    description: "Pull the rope in a downwards motion squeezing the tricep.",
    recomendedReps: 10
  
  }),
  Exercise.create({
    name: "Hammer Curl",
   muscleGroup: "Arms",
   imageUrl: "https://images.unsplash.com/photo-1585342565162-3704ff9b221d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80",
    description: "Using a dumbell held veritcally, users should push/pull the dumbell up and down, squeezing the bicep and tricep",
    recomendedReps: 10
  
  }),
  Exercise.create({
    name: "Bent-over Row",
   muscleGroup: "Back",
   imageUrl: "https://images.unsplash.com/photo-1566241142364-df7f478ce55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80",
    description: "Using a dumbell or barbell, bend the body to stretch the back, pull the weight back to contract back muscles. ",
    recomendedReps: 10
  
  }),
  Exercise.create({
    name: "Pull Ups",
   muscleGroup: "Back",
   imageUrl: "https://images.unsplash.com/photo-1520334363269-c1b342d17261?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=674&q=80",
    description: "Using a bar, pull up the body and hold for 2 seconds to contract the back ",
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