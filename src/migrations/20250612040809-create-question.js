'use strict';
/** @type {import('sequelize-cli').Migration} */
export default {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('questions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      content: {
        type: Sequelize.TEXT,
        allowNull:false,
      },
      major: {
        type: Sequelize.ENUM('Thiết Kế Web', 'Mobile', 'Mạng Máy Tính'),
        allowNull: false,
      },
      explaination: {
        type: Sequelize.TEXT,
      },
      difficulty: {
        type: Sequelize.ENUM('Gà mờ', 'Cứng tay' ,'Đỉnh kout', 'Trùm cuối'),
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('questions');
  }
};