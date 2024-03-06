const http=require("http")
const path=require("path")
const {rootPath}=require("./basePath")
const fs=require("fs")
const { isUtf8 } = require("buffer")
const dataPath=path.join(rootPath,'data','product.json')

const getReadData=(cb)=>{
    fs.readFile(dataPath,isUtf8,(err, data)=>{
        if(err){
            console.log("Error reading",err)
            return
        }
        try{
            const newData=JSON.parse(data)
            cb(newData)

        }
        catch(err){
            console.log("Error reading",err)
        }

    })

}

const postWriteData=(data)=>{
    fs.writeFile(dataPath,JSON.stringify(data),(err)=>{
        console.log("Error writing")
    })
}

module.exports={getReadData,postWriteData}
