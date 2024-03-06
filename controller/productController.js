const path = require("path");
const { rootPath } = require("..//utils/basePath");
// const Product=require("")
const db = require("..//config/db.js");
const Product = require("..//module/product.js");
const { copyFileSync } = require("fs");

const getProduct = (req, res, next) => {
  res.sendFile(path.join(rootPath, "veiws", "product.html"));
};

const postAddProduct = async (req, res, next) => {
  try {
    const product = await new Product(req.body.title, req.body.description);
    product.save();
    console.log(product);
  } catch (err) {
    console.log(err);
  }
};
const getAddProduct = async (req, res, nex) => {
  try {
    const data = await Product.fetchAll();
    console.log(data);
  } catch (err) {
    console.log(err);
  }

  // Product.fetchAll((item)=>{
  //     console.log(item)
  // })

  res.send("Product already added");
};
const singleProduct=async (req,res,next)=>{
    try{
        const product=await Product.singleId(req.params.id)


    }
    catch(err){
        console.log(err)
    }
}
const delelteItem=async (req,res,next)=>{
    try{
        const product=await Product.delelteItem(req.params.id)
        console.log(product)
        res.send("Product deleted")

    }
    catch(err){
        console.log(err);
    }
}
const updateItem=async(req,res,next)=>{
    try{
        const product=await Product.updateItem(req.params.id,req.body)
        console.log(product)

    }
    catch(err){
        console.log(err);
    }
}

module.exports = { getProduct, getAddProduct, postAddProduct,singleProduct,delelteItem,updateItem };
