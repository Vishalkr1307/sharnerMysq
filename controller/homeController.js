const path=require("path")
const rootPath=path.join(path.dirname(process.mainModule.filename))
const {getReadData}=require("..//utils/storage")

const getHome=(req,res,next)=>{
    res.sendFile(path.join(rootPath,'veiws' ,'home.html'))


}
module.exports={getHome}