const QuestionModel = require('./Question')
async function testQuestionModel() {
    try {
        const topicIndex = 1; 
        const questionModel = new Question("./topics");
        await Question.loadQuestions(topicIndex); 

        
        console.log('Все вопросы:');
        console.log(Question.getAllQuestions()); 

        
        const specificQuestionIndex = 0; 
        console.log('Конкретный вопрос:');
        console.log(Question.getQuestion(specificQuestionIndex)); 

        // 
        const keyword = ''; //
        console.log('Отфильтрованные вопросы:');
        console.log(Question.filterQuestions(keyword));

    } catch (error) {
        console.error('Ошибка:', error.message);
    }
}