import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/sequelize.js';

class User extends Model {
  static associate(models) {
    User.hasMany(models.QuizAttempt, {
      foreignKey: 'user_id',
    });
    User.belongsToMany(models.QuestionQuiz, {
      through: models.Rating,
      foreignKey: 'user_id',
      otherKey: 'quiz_question_id'
    });
    User.hasMany(models.Rating, {
      foreignKey: 'user_id',
    })
  }
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fullname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.ENUM('admin', 'user'),
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    avatar: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: 'User',
    tableName: 'users',
    timestamps: false, // No timestamps defined in original
  },
);

export default User;