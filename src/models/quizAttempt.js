import { DataTypes, DATE } from "sequelize";
import sequelize from "../config/sequelize";
import User from "./user";
import Quiz from "./quiz";

const QuizAttempt = sequelize.define('QuizAttempt', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    userId: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'id',
        },
        allowNull: false,
    },
    quizId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Quiz,
            key: 'id',
        },
    },
    startTime: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
    endTime: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    score: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    status: {
        type: DataTypes.ENUM('Đang làm bài', 'Đã hoàn thành'),
        allowNull: false,
        defaultValue: 'Đang làm bài',
    },
}, {
    tableName: 'quiz_attempts',
    timestamps: false,
});

export default QuizAttempt;