import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";
import Quiz from "./quiz.js";

const Question = sequelize.define('Question', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    major: {
        type: DataTypes.ENUM('Thiết Kế Web', 'Mobile', 'Mạng Máy Tính'),
        allowNull: false,
    },
    difficulty: {
        type: DataTypes.ENUM('Gà mờ', 'Cứng tay', 'Đỉnh kout', 'Trùm cuối'),
        allowNull: false,
    },
    createAt: {
        type: DataTypes.DATE,
        allowNull:false,
        defaultValue: DataTypes.NOW,
    }
}, {
    tableName: 'questions', 
    timestamps: true,
});

export default Question;