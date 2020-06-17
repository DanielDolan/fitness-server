const Sequelize = require("sequelize");
const db = require("../db");

<<<<<<< HEAD
const Exercise = db.define("exercises", {
=======
const Exercise = db.define("exercise", {
>>>>>>> f8eb727a5b8977d0aa9861757a7acfb4d786446f
  name: { type: Sequelize.STRING, allowNull: false },
  muscleGroup: { type: Sequelize.STRING, allowNull: false },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: "https://via.placeholder.com/480x240?text=Placeholder",
  },
  description: { type: Sequelize.TEXT, defaultValue: "", allowNull: false },
  recomendedReps: { type: Sequelize.INTEGER, allowNull: false },
});

module.exports = Exercise;