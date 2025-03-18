const express=require("express");
const user=express.Router();
const userControl=require("../controller/userControl");
const {homePage,aboutPage,contactPageGet,contactPagePost}=userControl;
user.get("/",homePage)
user.get("/about",aboutPage);
user.get("/contact",contactPageGet);
user.post("/contact",contactPagePost);
module.exports=user;