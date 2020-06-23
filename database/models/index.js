// Here, we can prepare to register our models, set up associations between tables, and generate a barrel file for the models;

const Exercise = require("./exercise");
const User = require("./user");

User.hasMany(Exercise);
Exercise.belongsTo(User);
Exercise.belongsToMany(User, {through: 'UserExercise'});
User.belongsToMany(Exercise, {through: 'UserExercise'});

module.exports = {
  Exercise,
  User,
};
