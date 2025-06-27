import Answer from "../models/answer.js";
import AnswerAttempt from "../models/answer_attempt.js";
import QuizAttempt from "../models/quiz_attempt.js";

export const submitQuizAttempt = async (attemptId, answers) => {
    let correct = 0;
    let wrong = 0;
    let skipped = 0;

    for (const [questionId, answerId] of Object.entries(answers)) {
        if (!answerId) {
            skipped++;
            continue;
        }

        const answer = await Answer.findByPk(answerId);
        const isCorrect = answer?.is_correct === true;

        if (isCorrect) correct++;
        else wrong++;

        await AnswerAttempt.create({
            quiz_attempt_id: attemptId,
            question_id: questionId,
            selected_answer_id: answerId,
        });
    }

    await QuizAttempt.update(
        {
            status: 'completed',
            score: correct,
            end_time: new Date()
        },
        { where: { id: attemptId } }
    );

    return { correct, wrong, skipped };
};

export const getAllSubmitAnswers = async () => {
    const data = await AnswerAttempt.findAll();
    return data;
}

export const findQuizAttempt = async (id) => {
    const quizAttempt = await QuizAttempt.findByPk(id);
    return quizAttempt;
}

export const addAnswer = async (question_id, content, is_correct) => {
    const answer = await Answer.create({
        question_id,
        content,
        is_correct,
    });
    return answer;
}   

export const getAllAnswer = async () => {
    const answers = await Answer.findAll();
    return answers;
}

export const updateAnswer = async (id, content, is_correct) => {
    const answer = await Answer.findByPk(id);

    if (!answer) {
        return null;
    }

    answer.content = content;
    answer.is_correct = is_correct;
    await answer.save();

    return answer;
};

export const getAllAnswerByQuestionId = async (id) => {
    const answers = await Answer.findAll({
        where: { question_id: id },
    });
    return answers;
}

export const deleteAnswer = async (question_id) => {
    const result = await Answer.destroy({
        where: { question_id },
    });
    return result > 0;
};