const express=require("express");
const {homeController,aboutController,contactController} = require("../controller/homeController");
const home=express.Router();
home.get("/",homeController);
home.get("/about",aboutController);
home.get("/contact",contactController);
module.exports=home;