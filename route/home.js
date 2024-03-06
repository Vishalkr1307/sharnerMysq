const express=require("express")
const route=express.Router()
const {getHome}=require("..//controller/homeController")

route.get('',getHome)
module.exports = route