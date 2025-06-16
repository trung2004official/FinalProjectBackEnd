import bcrypt from 'bcrypt'

export default {
  async up(queryInterface) {
    const hashedPassword = await bcrypt.hash('final123', 10);

    await queryInterface.bulkInsert('users', [
      {
        id: 1,
        username: 'admin123',
        password: hashedPassword,
        email: 'admin123@gmail.com',
        role: 'admin',
      },
      {
        id: 2,
        username: 'trungle1603',
        password: hashedPassword,
        email: 'trungle1603@gmail.com',
        role: 'user',
      },
      {
        id: 3,
        username: 'quochuy123',
        password: hashedPassword,
        email: 'quochuy123@gmail.com',
        role: 'user',
      },
      {
        id: 4,
        username: 'user04',
        password: hashedPassword,
        email: 'user04@gmail.com',
        role: 'user',
      },
    ], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('users', null, {});
  },
};