const Sequelize = require("sequelize");
const db = require("../db");

const User = db.define("user", {
  firstName: { type: Sequelize.STRING, allowNull: false },
  lastName: {type: Sequelize.STRING, allowNull: false},
  email: {type: Sequelize.STRING, allNull: false },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: "https://via.placeholder.com/480x240?text=Placeholder",
  },
  Weight: {type: Sequelize.INTEGER, allNull: false},
});

module.exports = User;