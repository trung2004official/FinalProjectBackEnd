import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/sequelize.js';

class QuestionQuiz extends Model {
  static associate(models) {
    QuestionQuiz.belongsTo(models.Quiz, {
      foreignKey: 'quiz_id',
      as: 'quizzes',
    });

    QuestionQuiz.belongsTo(models.Question, {
      foreignKey: 'question_id',
      as: 'questions',
    });

    QuestionQuiz.hasMany(models.Rating, {
      foreignKey: 'quiz_question_id'
    });

    QuestionQuiz.belongsToMany(models.User, {
      through: models.Rating,
      foreignKey: 'quiz_question_id',
      otherKey: 'user_id',
    });
  }
}

QuestionQuiz.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    quiz_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'quizzes',
        key: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
    question_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'questions',
        key: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
  },
  {
    sequelize,
    modelName: 'QuestionQuiz',
    tableName: 'questions_quizzes',
    timestamps: true,
  },
);

export default QuestionQuiz;