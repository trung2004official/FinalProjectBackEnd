import { Model, DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";

class Rating extends Model {
    static associate(models) {
        Rating.belongsTo(models.QuestionQuiz, {
            foreignKey: 'quiz_question_id',
            as: 'quizzes_questions'
        });
        Rating.belongsTo(models.User, {
            foreignKey: 'user_id',
            as: 'users'
        });
    }
}

Rating.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        quiz_question_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'questions_quizzes',
                key: 'id'
            },
            onDelete: 'CASCADE'
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'users',
                key: 'id',
            },
            onDelete: 'CASCADE'
        },
        star_rating: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        comment: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    }, {
        sequelize,
        modelName: 'Rating',
        tableName: 'ratings',
        timestamps: true,
    }
)

export default Rating;