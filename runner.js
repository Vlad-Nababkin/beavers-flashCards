const GameController = require("./GameController");

async function start() {
  console.log('Добро пожаловать в игру!');
  await GameController.startGame()
}

start()