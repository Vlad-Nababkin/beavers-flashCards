const ReadFile = require('./ReadDirAndFile');
const View = require('./UserView');
const ThemModel = require('./ThemModel');
const QuestionModel = require('./Question');
const chalk = require('chalk');
const SoundManager = require('./SoundManager');


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
        if (questionModel.checkAnswer(userAnswer)) {
          console.log(chalk.green('Правильно!'));
          SoundManager.playRightAnswer();
        } else {
          console.log(chalk.red('Неправильно!'));
          SoundManager.playWrongAnswer();
        }
        questionModel.nextQuestion();
      }

      const result = questionModel.getResults();
      View.showResult(result);
    } catch (error) {
      console.error(chalk.red('Произошла ошибка:', error.message));
    }
  }
}

module.exports = GameController;
