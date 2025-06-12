import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelize.js';

const Quiz = sequelize.define('Quiz', {
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
    question_count: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    image: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    createAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },  
}, {
    tableName: 'quizzes',
    timestamps: true,
});

export default Quiz;