const Sequelize = require("sequelize");
const db = require("../db");
const crypto = require("crypto");

const User = db.define("user", {
<<<<<<< HEAD
  // firstName: { type: Sequelize.STRING, allowNull: false },
  // lastName: {type: Sequelize.STRING, allowNull: false},
  // email: {type: Sequelize.STRING, allNull: false },
  // Weight: {type: Sequelize.INTEGER, allNull: false},
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    get() {
      return () => this.getDataValue("password");
    }
  },
  salt: {
    type: Sequelize.STRING,
    get() {
      return () => this.getDataValue("salt");
    }
  },
  googleId: {
    type: Sequelize.STRING
  }
=======
  firstName: { type: Sequelize.STRING, allowNull: false },
  lastName: {type: Sequelize.STRING, allowNull: false},
  email: {type: Sequelize.STRING, allNull: false },
  weight: {type: Sequelize.INTEGER, allNull: false},
>>>>>>> f8eb727a5b8977d0aa9861757a7acfb4d786446f
});

User.generateSalt = function() {
  return crypto.randomBytes(16).toString("base64");
};

User.encryptPassword = function(plainText, salt) {
  return crypto
    .createHash("RSA-SHA256")
    .update(plainText)
    .update(salt)
    .digest("hex");
};

User.prototype.correctPassword = function(candidatePwd) {
  return User.encryptPassword(candidatePwd, this.salt()) === this.password();
};

const setSaltAndPassword = user => {
  if (user.changed("password")) {
    user.salt = User.generateSalt();
    user.password = User.encryptPassword(user.password(), user.salt());
  }
};

User.beforeCreate(setSaltAndPassword);
User.beforeUpdate(setSaltAndPassword);

module.exports = User;