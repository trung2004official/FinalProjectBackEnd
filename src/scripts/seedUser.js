import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import User from '../models/user.js';         
import sequelize from '../config/sequelize.js';  

dotenv.config();

const seedUser = async () => {
  try {
    // Kết nối database
    await sequelize.authenticate();
    console.log('✅ DB connected...');

    // Đảm bảo bảng tồn tại
    await sequelize.sync();

    // Băm mật khẩu
    const hashedPassword = await bcrypt.hash('123456', 10);

    // Xóa user cũ nếu tồn tại (optional)
    await User.destroy({ where: { email: 'test@example.com' } });

    // Tạo user mới
    await User.create({
      email: 'test@example.com',
      password: hashedPassword,
    });

    console.log('✅ User seeded thành công!');
    process.exit(); // Thoát khi xong
  } catch (error) {
    console.error('❌ Lỗi khi seed user:', error);
    process.exit(1);
  }
};

seedUser();