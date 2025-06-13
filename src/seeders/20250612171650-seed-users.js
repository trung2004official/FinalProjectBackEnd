import bcrypt from 'bcrypt'

export default {
  async up(queryInterface) {
    await queryInterface.bulkInsert('users', [
      {
        id: 1,
        username: 'admin123',
        password: 'final123',
        email: 'admin123@gmail.com',
        role: 'admin',
      },
      {
        id: 2,
        username: 'trungle1603',
        password: 'final123',
        email: 'trungle1603@gmail.com',
        role: 'user',
      },
      {
        id: 3,
        username: 'quochuy123',
        password: 'final123',
        email: 'quochuy123@gmail.com',
        role: 'user',
      },
      {
        id: 4,
        username: 'user04',
        password: 'final123',
        email: 'user04@gmail.com',
        role: 'user',
      },
    ], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('users', null, {});
  },
};