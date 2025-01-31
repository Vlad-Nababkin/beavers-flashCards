const ReadFile = require('./ReadDirAndFile');

class ThemModel {
  static async themModel() {
    const ListThem = await ReadFile.readDir();
    return await ListThem.map((theme, index) => ({
      name: `${index + 1}. ${theme.replace('data.txt', '').replace(/_/g, ' ')}`,
      value: index + 1,
    }));
  }
}

module.exports = ThemModel;
