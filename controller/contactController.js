const path=require("path")
const {rootPath}=require("..//utils/basePath")

const getContact=(req,res,next) =>{
    res.sendFile(path.join(rootPath,'veiws','contact.html'))
}

module.exports ={getContact}