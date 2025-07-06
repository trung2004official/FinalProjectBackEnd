import { Model, DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";

class Favorite extends Model {
    static associate(models) {
        Favorite.belongsTo(models.User, {
            foreignKey: 'user_id',
        });
        Favorite.belongsTo(models.Quiz, {
            foreignKey: 'quiz_id',
        });
    }
}

Favorite.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement:true,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'users',
                key: 'id',
            },
            allowNull: false,
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
        },
        quiz_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'quizzes',
                key: 'id',
            },
            allowNull:false,
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
        }
    }, {
        sequelize,
        modelName: 'Favorite',
        tableName: 'favorites',
    }
);

export default Favorite;