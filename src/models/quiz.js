import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/sequelize.js';

class Quiz extends Model {
  static associate(models) {
    Quiz.belongsToMany(models.Question, {
      through: models.QuestionQuiz,
      foreignKey: 'quiz_id',
      otherKey: 'question_id',
      as: 'questions'
    });

    Quiz.hasMany(models.QuestionQuiz, {
      foreignKey: 'quiz_id',
      as: 'questionQuizzes',
    });

    Quiz.hasMany(models.QuizAttempt, {
      foreignKey: 'quiz_id',
    });

    
    Quiz.hasMany(models.Rating, {
      foreignKey: 'quiz_id'
    });

    Quiz.belongsToMany(models.User, {
      through: models.Rating,
      foreignKey: 'quiz_id',
      otherKey: 'user_id',
    });
  }
}

Quiz.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    major: {
      type: DataTypes.ENUM('Thiết Kế Web', 'Mobile', 'Mạng Máy Tính'),
      allowNull: false,
    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    difficulty: {
      type: DataTypes.ENUM('Gà mờ', 'Cứng tay', 'Đỉnh kout', 'Trùm cuối'),
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM('public', 'private'),
      allowNull: false,
      defaultValue: 'private',
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    question_count: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
  },
  {
    sequelize,
    modelName: 'Quiz',
    tableName: 'quizzes',
    timestamps: false, // No timestamps defined in original
  },
);

export default Quiz;