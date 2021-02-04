'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Photo)
    }
  };
  User.init({
    email: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: "email required"
        },
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [8, 255],
          msg: "password length must be greater than 7"
        },
        isUpperCase(password) {
          if(!password.match(/[A-Z]/g)) {
            throw { name: "Bad Request", message: "password must include upper case", status: 400 }
          }
        },
        isLowerCase(password) {
          if(!password.match(/[a-z]/g)) {
            throw { name: "Bad Request", message: "password must include lower case", status: 400 }
          }
        },
        isNumber(password) {
          if(!password.match(/[0-9]/g)) {
            throw { name: "Bad Request", message: "password must include number", status: 400 }
          }
        }
      },
    },
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};