const ReadFile = require('./ReadDirAndFile');

class QuestionModel {
  constructor(questions) {
    this.questions = questions;
    this.currentQuestionIndex = 0;
    this.correctAnswers = 0;
  }

  getCurrentQuestions() {
    return this.questions[this.currentQuestionIndex];
  }

  checkAnswer(answer) {
    const currentQuestion = this.getCurrentQuestions();
    if (answer.toLowerCase() === currentQuestion.answer) {
      this.correctAnswers++;
      return true;
    }
    return false;
  }

  nextQuestion() {
    this.currentQuestionIndex++;
  }

  getResults() {
    return {
      total: this.questions.length,
      correct: this.correctAnswers,
    };
  }
}

module.exports = QuestionModel;
