const { log } = require('console')
const fsp = require('fs/promises')
const { EOL } = require('os')

class ReadFile{
    static async readDir(){
        return (await fsp.readdir('./topics')).map(el => el.replace(/_data.txt/,''))
    }

    static async readDirFile(num){
        const arrayFile = await this.readDir()
        const firstArray = await fsp.readFile(`./topics/${arrayFile[num-1]}_data.txt`,'utf-8')
        const firstNormalArray =  firstArray.split(EOL).filter(el => el !== '') 
        const result = []
        for(let i = 0; i < firstNormalArray.length;i+=2){
            result.push({question:`${firstNormalArray[i]}`,answer:`${firstNormalArray[i+1]}`})  
        }
        return result
    }
    
}



module.exports = ReadFile