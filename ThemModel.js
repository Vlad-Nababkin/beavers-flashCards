const ReadFile = require("./ReadDirAndFile")

class ThemModel{
    static async themModel(){
      const ListThem = await ReadFile.readDir()
     // const ListThemString = ListThem.map(el => el.replace(/_data.txt/,''))
    //   console.log(ListThem)
      return await Object.values(ListThem).map((theme, index) => ({name: `${index + 1}.${theme.replace(/_|data.txt/g,' ').slice(0, -2)}`, value: theme}))
    }
}

ThemModel.themModel().then((data) => console.log(data));

module.exports = ThemModel