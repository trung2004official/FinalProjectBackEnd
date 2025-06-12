import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";
import Quiz from "./quiz.js";
import Question from "./question.js";

const QuestionQuiz = sequelize.define('QuestionQuiz', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    quizId: {
        type: DataTypes.INTEGER,
        references: {
            model: Quiz,
            key: 'id',
        },
    },
    questionId: {
        type: DataTypes.INTEGER,
        references: {
            model: Question,
            key: 'id',
        },
    },
}, {
    tableName: 'questions_quizzes',
    timestamps: false,
});

export default QuestionQuiz;