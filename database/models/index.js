// Here, we can prepare to register our models, set up associations between tables, and generate a barrel file for the models;

const Exercise = require("./exercise");
const User = require("./user");

Exercise.hasMany(User);

User.belongsTo(Exercise);

module.exports = {
  Exercise,
  User,
};
