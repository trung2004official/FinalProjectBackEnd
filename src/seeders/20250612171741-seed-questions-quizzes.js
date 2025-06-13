export default {
  async up(queryInterface) {
    await queryInterface.bulkInsert('questions_quizzes', [
      {
        id: 1,
        quiz_id: 1,
        question_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 2,
        quiz_id: 1,
        question_id: 3,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 3,
        quiz_id: 2,
        question_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('questions_quizzes', null, {});
  },
};