'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('city_tours', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nameTour: {
        type: Sequelize.STRING
      },
      depart: {
        type: Sequelize.DATE
      },
      arrive: {
        type: Sequelize.DATE
      },
      city: {
        type: Sequelize.STRING
      },
      quantity: {
        type: Sequelize.STRING
      },
      filled: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('city_tours');
  }
};