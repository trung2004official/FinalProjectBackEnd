/** @type {import('sequelize-cli').Migration} */
export default {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('quiz_attempts', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      quiz_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'quizzes',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      correct: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      wrong: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      skipped: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      start_time: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      end_time: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      status: {
        type: Sequelize.ENUM('in_progress', 'completed'),
        allowNull: true,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('quiz_attempts');
  }
};
