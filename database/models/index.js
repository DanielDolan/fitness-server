// Here, we can prepare to register our models, set up associations between tables, and generate a barrel file for the models;

const Exercises = require("./exercises");
const User = require("./user");

Exercises.hasMany(User);

User.belongsTo(Exercises);

module.exports = {
  Exercises,
  User,
};
