const Sequelize = require("sequelize");
const db = require("../db");

const Exercise = db.define("exercises", {
  Name: { type: Sequelize.STRING, allowNull: false },
  MuscleGroup: { type: Sequelize.STRING, allowNull: false },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: "https://via.placeholder.com/480x240?text=Placeholder",
  },
  description: { type: Sequelize.TEXT, defaultValue: "", allowNull: false },
  RecomendedReps: { type: Sequelize.INTEGER, allowNull: false },
});

module.exports = Exercise;