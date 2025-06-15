export default {
  async up(queryInterface) {
    const data = [];

    // Generate 40 entries for quiz_id 4 with question_id 4 to 43
    for (let i = 0; i < 40; i++) {
      data.push({
        id: i + 1,
        quiz_id: 3,
        question_id: i + 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }

    // Generate 40 entries for quiz_id 5 with question_id 45 to 84
    for (let i = 0; i < 40; i++) {
      data.push({
        id: i + 41,
        quiz_id: 4,
        question_id: i + 45,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }

    await queryInterface.bulkInsert('questions_quizzes', data, {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('questions_quizzes', null, {});
  },
};