'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      this.hasMany(models.Store, { foreignKey: 'createdBy', as: 'stores'});
      this.belongsToMany(models.Store, { through: 'AdminsStores', foreignKey: 'userId', as: 'Admins' })
    }
  };
  User.init({
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "First name cannot be empty"
        }
      }
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Last name cannot be empty"
        }
      }
    },
    mobileNumber: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        notEmpty: {
          msg: "Mobile number cannot be empty"
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        notEmpty: {
          msg: "Email cannot be empty"
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Password cannot be empty"
        }
      }
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};