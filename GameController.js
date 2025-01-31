const ReadFile = require('./ReadDirAndFile');
const View = require('./UserView');
const ThemModel = require('./ThemModel');
const QuestionModel = require('./Question');

class GameController {
  static async startGame() {
    try {
      const themList = await ThemModel.themModel();
      const selectedThem = await View.selectTheme(themList);
      const questions = await ReadFile.readDirFile(selectedThem);

      const questionModel = new QuestionModel(questions);

      while (questionModel.isGameOver()) {
        const currentQuestion = questionModel.getCurrentQuestions();
        const userAnswer = await View.askQuestion(currentQuestion.question);
        questionModel.checkAnswer(userAnswer);
        questionModel.nextQuestion();
      }

      const result = questionModel.getResults();
      View.showResult(result);
    } catch (error) {
      console.error('Произошла ошибка:', error.message);
    }
  }
}

module.exports = GameController;
