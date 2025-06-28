import bcrypt from 'bcrypt'

export default {
  async up(queryInterface) {
    const hashedPassword = await bcrypt.hash('final123', 10);

    await queryInterface.bulkInsert('users', [
      {
        id: 1,
        username: 'admin123',
        password: hashedPassword,
        fullname: 'Admin User',
        email: 'admin123@gmail.com',
        role: 'admin',
        address: 'Hà Nội',
        phone: '0123456789',
        avatar: null,
      },
      {
        id: 2,
        username: 'trungle1603',
        password: hashedPassword,
        fullname: 'Trung Le',
        email: 'trungle1603@gmail.com',
        role: 'user',
        address: 'Hồ Chí Minh',
        phone: '0987654321',
        avatar: null,
      },
      {
        id: 3,
        username: 'quochuy123',
        password: hashedPassword,
        fullname: 'Quốc Huy',
        email: 'quochuy123@gmail.com',
        role: 'user',
        address: 'Đà Nẵng',
        phone: '0911222333',
        avatar: null,
      },
      {
        id: 4,
        username: 'user04',
        password: hashedPassword,
        fullname: 'User 04',
        email: 'user04@gmail.com',
        role: 'user',
        address: 'Cần Thơ',
        phone: '0999888777',
        avatar: null,
      },
    ], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('users', null, {});
  },
};