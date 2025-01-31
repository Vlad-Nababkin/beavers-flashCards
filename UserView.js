const inquirer = require('inquirer');
const { default: Choices } = require('inquirer/lib/objects/choices');
const chalk = require('chalk');

class View {
  static async selectTheme(themes) {
    const { theme } = await inquirer.prompt([
      {
        type: 'list',
        name: 'theme',
        message: 'Выберите тему:',
        choices: themes,
      },
    ]);
    return theme;
  }

  static async askQuestion(question) {
    const { answer } = await inquirer.prompt([
      {
        type: 'input',
        name: 'answer',
        message: question,
      },
    ]);
    return answer;
  }

  static showResult(results) {
    console.log(`\nИгра окончена!✅`);
    console.log(`Правильных ответов: ${results.correct} из ${results.total}`);
  }
}

module.exports = View
