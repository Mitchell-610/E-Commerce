// Category.js
const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {
    // define columns
   
  },
  {
    sequelize,
    modelName: 'category',
    timestamps: false,
    freezeTableName: true,
    underscored: true,
  }
);

module.exports = Category;
