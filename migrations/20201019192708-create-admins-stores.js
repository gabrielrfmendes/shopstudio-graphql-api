'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('AdminsStores', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.STRING,
        allowNull: false,
        references: { model: 'users', key: 'id'}
      },
      storeId: {
        type: Sequelize.STRING,
        allowNull: false,
        references: { model: 'stores', key: 'id'}
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('AdminsStores');
  }
};