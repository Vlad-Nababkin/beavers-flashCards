const ReadFile = require('./ReadDirAndFile')

class QuestionModel {
    constructor(topic){
        this.topic = topic
        this.questions = [];
        this.correctAnswers

    }
    async loadQuestions(num){
     this.questions = await ReadFile.readDirFile(num);
    }
    async getQuestions(){
     return this.questions[]
    }
    getCurrentQuestion(index){
    return this.questions[index].question
    }
 
}
const aboba = new QuestionModel('topics/nighthawk_flashcard_data.txt')
aboba.loadQuestions(1)

console.log( aboba.getQuestions())

module.exports = QuestionModel
