import { Model, DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";

class QuizAttempt extends Model {
    static associate(models) {
        QuizAttempt.belongsTo(models.User, {
            foreignKey: 'user_id',
        });
        QuizAttempt.belongsTo(models.Quiz, {
            foreignKey: 'quiz_id',
        });
        QuizAttempt.hasMany(models.AnswerAttempt, {
            foreignKey: 'quiz_attempt_id',
        });
    }
}

QuizAttempt.init (
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'users',
                key: 'id',
            },
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
        },
        quiz_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'quizzes',
                key: 'id',
            },
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
        },
        start_time: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        end_time: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        status: {
            type: DataTypes.ENUM('in_progress', 'completed'),
            allowNull: true,
        },
        correct: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        wrong: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        skipped: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
            field: 'created_at',
        },
        updated_at: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
            field: 'updated_at',
        }
    }, {
        sequelize,
        tableName: 'quiz_attempts',
        timestamps: true,
        underscored: true,
    }
)

export default QuizAttempt;