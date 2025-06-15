'use strict';
/** @type {import('sequelize-cli').Migration} */
export default {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('quizzes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      major: {
        type: Sequelize.ENUM('Thiết Kế Web', 'Mobile', 'Mạng Máy Tính'),
        allowNull: false,
      },
      duration: {
        type: Sequelize.INTEGER
      },
      difficulty: {
        type: Sequelize.ENUM('Gà mờ', 'Cứng tay', 'Đỉnh kout', 'Trùm cuối'),
        allowNull: false
      },
      status: {
        type: Sequelize.ENUM('public', 'private'),
        allowNull: true,
      },
      image: {
        type: Sequelize.STRING
      },
      question_count: {
        type: Sequelize.INTEGER
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('quizzes');
  }
};