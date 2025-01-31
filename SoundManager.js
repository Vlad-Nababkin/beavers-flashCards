const playSound = require('play-sound')();

class SoundManager {
  static playStartGame() {
    playSound.play('./sounds/startGame.mp3', (err) => {
      if (err) console.error(chalk.red('Ошибка воспроизведения звука:', err.message));
    });
  }

  static playRightAnswer() {
    playSound.play('./sounds/rightAnswer.mp3', (err) => {
      if (err) console.error(chalk.red('Ошибка воспроизведения звука:', err.message));
    });
  }

  static playWrongAnswer() {
    playSound.play('./sounds/fart.mp3', (err) => {
      if (err) console.error(chalk.red('Ошибка воспроизведения звука:', err.message));
    });
  }
}

module.exports = SoundManager;
