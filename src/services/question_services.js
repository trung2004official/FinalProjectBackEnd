import Answer from "../models/answer"
import Question from "../models/question"

export const getAnswersData = async (id) => {
    const answers = await Question.findAll({
        where: id,
        include: [{model: Answer, as: 'answers'}]
    });
    return answers;
};