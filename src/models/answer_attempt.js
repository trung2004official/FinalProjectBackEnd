import { Model, DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";

class AnswerAttempt extends Model {
    static associations(models) {
        AnswerAttempt.belongsTo(models.QuizAttempt, {
            foreignKey: 'quiz_attempt_id'
        });
        AnswerAttempt.belongsTo(models.Answer, {
            foreignKey: 'selected_answer_id'
        });
        AnswerAttempt.belongsTo(models.Question, {
            foreignKey: 'question_id'
        });
    }
}

AnswerAttempt.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        quiz_attempt_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'quiz_attempts',
                key: 'id',
            },
        },
        selected_answer_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'answers',
                key: 'id',
            }
        },
        question_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'questions',
                key: 'id',
            },
        },
    }, {
        sequelize,
        tableName: 'answer_attempts'
    }
);

export default AnswerAttempt;