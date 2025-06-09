const sequelize = require('../config/db');
const User = require('./user');

const syncDatabase = async () => {
    try {
        await sequelize.authenticate();
        console.log('Kết nối MySql thành công');
        await sequelize.sync();
        console.log('Đồng bộ model thành công!');
    } catch (error) {
        console.error('Lỗi kết nối hoặc đồng bộ: ', error);
    }
};