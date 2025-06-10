import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";
import QuizAttempt from "./quizAttempt.js";
import Question from "./question.js";
import Answer from "./answer.js";

const UserAnswer = sequelize.define('UserAnswer', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    quizAttemptId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: QuizAttempt,
            key: 'id',
        },
    },
    questionId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Question,
            key: 'id',
        },
    },
    answerId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Answer,
            key: 'id',
        },
    },
    selectedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
}, {
    tableName: 'user_answers',
    timestamps: false,
});

export default UserAnswer;