const express=require("express");
const admin=express.Router();
const adminController=require("../controller/adminController")
const {adminHome,adminAbout,adminContact}=adminController
admin.get("/",adminHome)
admin.get("/about",adminAbout)
admin.get("/contact",adminContact)
module.exports=admin;