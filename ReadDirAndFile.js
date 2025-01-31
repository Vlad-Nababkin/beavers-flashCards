const fsp = require('fs/promises');
const { EOL } = require('os');

class ReadFile {
  static async readDir() {
    return await fsp.readdir('./topics');
  }

  static async readDirFile(num) {
    try {
      const arrayFile = await this.readDir();
      const firstArray = await fsp.readFile(`./topics/${arrayFile[num - 1]}`, 'utf-8');
      const firstNormalArray = firstArray.split(EOL).filter((el) => el !== '');
      const result = [];
      for (let i = 0; i < firstNormalArray.length; i += 2) {
        result.push({
          question: `${firstNormalArray[i]}`,
          answer: `${firstNormalArray[i + 1]}`,
        });
      }
      return result;
    } catch (error) {
      console.error('Ошибка при чтении файла:', error.message);
    }
  }
}

module.exports = ReadFile;
