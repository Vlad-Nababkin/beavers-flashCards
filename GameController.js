const ReadFile = require('./ReadDirAndFile');
const View = require('./UserView');
const ThemModel = require('./ThemModel');
const QuestionModel = require('./Question');

class GameController {
  static async startGame() {
    try {
      const topics = await ReadFile.readDir();
      const themList = await ThemModel.themModel();

      const selectedThem = await View.selectedThem(themList);
      const questions = topics[selectedThem - 1];

      const questionModel = new QuestionModel(questions);

      while (questionModel.isGameOver()) {
        const currentQuestion = questionModel.getCurrentQuestion();
        const userAnswer = await View.askQuestion(currentQuestion.questions);
        questionModel.checkAnswer(userAnswer);
        questionModel.nextQuestion();
      }

      const result = questionModel.getResult();
      View.showResult(result);
    } catch (error) {
      console.error('Произошла ошибка:', error.massage);
    }
  }
}

module.exports = GameController;
