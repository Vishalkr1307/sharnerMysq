const express = require('express');
const app = express();
const route=express.Router();
const {getProduct,postAddProduct,getAddProduct,singleProduct,delelteItem,updateItem}=require("..//controller/productController")

route.get("",getProduct)
route.get("/success",getAddProduct)
route.post("/addProduct",postAddProduct)
route.get("/:id",singleProduct)
route.post("updateProduct/:id",updateItem)
route.get("/deleteItem/:id",delelteItem)

module.exports=route