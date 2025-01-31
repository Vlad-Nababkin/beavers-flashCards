const GameController = require("./GameController");
const chalk = require('chalk');
const SoundManager = require('./SoundManager');

async function start() {
  console.log(chalk.bold.bgYellow.red.underline('Добро пожаловать в игру!😜'));
  console.log(chalk.bold.bgGreen.blue('Начнем игру🔥'));
  SoundManager.playStartGame();
  await GameController.startGame()
}

start()