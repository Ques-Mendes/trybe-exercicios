'use strict';

const { DataTypes } = require("sequelize/types");

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('books', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      title: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      author: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      pageQuantity: {
        allowNull: true,
        type: DataTypes.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      }      
    });   
  },
  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('books');   
  }
};
