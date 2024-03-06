const express = require('express');
const app = express();
const route=express.Router();
const {getContact}=require("..//controller/contactController")

route.get("",getContact)
module.exports=route