import { Model, DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";

class Rating extends Model {
    static associate(models) {
        Rating.belongsTo(models.Quiz, {
            foreignKey: 'quiz_id',
            as: 'quizzes'
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
        quiz_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'quizzes',
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