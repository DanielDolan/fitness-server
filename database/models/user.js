const Sequelize = require("sequelize");
const db = require("../db");

const User = db.define("user", {
  firstName: { type: Sequelize.STRING, allowNull: false },
  lastName: {type: Sequelize.STRING, allowNull: false},
  email: {type: Sequelize.STRING, allNull: false },
  Weight: {type: Sequelize.INTEGER, allNull: false},
});

module.exports = User;