const GameController = require("./GameController");
const chalk = require('chalk');

async function start() {
  console.log(chalk.bold.bgYellow.red.underline('Добро пожаловать в игру!😜'));
  console.log(chalk.bold.bgGreen.blue('Начнем игру🔥'));
  await GameController.startGame()
}

start()