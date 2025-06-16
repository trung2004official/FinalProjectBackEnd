import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/sequelize.js';

class Question extends Model {
  static associate(models) {
    Question,this.belongsToMany(models.Quiz, {
      through: models.QuestionQuiz,
      foreignKey: 'question_id',
      otherKey: 'quiz_id',
      as: 'quizzes',
    });

    Question.hasMany(models.Answer, {
      foreignKey: 'question_id',
      as: 'answers',
    });

    Question.hasMany(models.QuestionQuiz, {
      foreignKey: 'question_id',
      as: 'questionQuizzes',
    });

    Question.hasMany(models.AnswerAttempt, {
      foreignKey: 'question_id',
    });
  }
}

Question.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    major: {
      type: DataTypes.ENUM('Thiết Kế Web', 'Mobile', 'Mạng Máy Tính'),
      allowNull: false,
    },
    explaination: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    score: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Question',
    tableName: 'questions',
    timestamps: false, // No timestamps defined in original
  },
);

export default Question;