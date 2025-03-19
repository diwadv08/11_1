const express=require("express");
const { homePath, aboutPath, contactPath } = require("../controller/homeController");
const home=express.Router();
home.get("/",homePath)
home.get("/about",aboutPath)
home.get("/contact",contactPath)
module.exports=home;