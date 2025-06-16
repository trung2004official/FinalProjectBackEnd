import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/sequelize.js';
class Answer extends Model {
  static associate(models) {
    Answer.belongsTo(models.Question, {
      foreignKey: 'question_id',
      as: 'question',
    });

    Answer.hasMany(models.AnswerAttempt, {
      foreignKey: 'selected_answer_id'
    });
  }
}

Answer.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    question_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'questions',
        key: 'id',
      },
      allowNull: false,
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
    is_correct: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Answer',
    tableName: 'answers',
    timestamps: false, // Tắt timestamps nếu không cần createdAt/updatedAt
  },
);

export default Answer;