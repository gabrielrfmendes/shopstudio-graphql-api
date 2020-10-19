'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Store extends Model {
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: 'createdBy', as: 'Creator' });
      this.belongsToMany(models.User, { through: 'AdminsStores', foreignKey: 'storeId', as: 'Admins' })
    }
  };
  Store.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.STRING
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Store name cannot be empty"
        }
      }
    },
    description: DataTypes.STRING,
    logo: DataTypes.STRING,
    url: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: {
          msg: "URL cannot be empty"
        }
      }
    },
    googleAnalyticsCode: DataTypes.STRING,
    fbPixelId: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Store',
  });
  return Store;
};