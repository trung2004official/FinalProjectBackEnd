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

    // New mappings for Web Design quizzes
    // Quiz ID 5: Questions 104–143
    for (let i = 0; i < 40; i++) {
      data.push({
        id: i + 81,
        quiz_id: 5,
        question_id: i + 104,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }
    // Quiz ID 6: Questions 144–183
    for (let i = 0; i < 40; i++) {
      data.push({
        id: i + 121,
        quiz_id: 6,
        question_id: i + 144,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }
    // Quiz ID 7: Questions 184–223
    for (let i = 0; i < 40; i++) {
      data.push({
        id: i + 161,
        quiz_id: 7,
        question_id: i + 184,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }

    // New mappings for Mobile quizzes
    // Quiz ID 23: Questions 224–263
    for (let i = 0; i < 40; i++) {
      data.push({
        id: i + 201,
        quiz_id: 23,
        question_id: i + 224,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }
    // Quiz ID 24: Questions 264–303
    for (let i = 0; i < 40; i++) {
      data.push({
        id: i + 241,
        quiz_id: 24,
        question_id: i + 264,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }
    // Quiz ID 25: Questions 304–343
    for (let i = 0; i < 40; i++) {
      data.push({
        id: i + 281,
        quiz_id: 25,
        question_id: i + 304,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }

    // New mappings for Networking quizzes
    // Quiz ID 43: Questions 344–383
    for (let i = 0; i < 40; i++) {
      data.push({
        id: i + 321,
        quiz_id: 43,
        question_id: i + 344,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }
    // Quiz ID 44: Questions 384–423
    for (let i = 0; i < 40; i++) {
      data.push({
        id: i + 361,
        quiz_id: 44,
        question_id: i + 384,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }
    // Quiz ID 45: Questions 424–463
    for (let i = 0; i < 40; i++) {
      data.push({
        id: i + 401,
        quiz_id: 45,
        question_id: i + 424,
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