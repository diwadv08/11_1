const express=require("express");
const { userGet,userList,userPost,userView,userEdit,userDelete,userUpdate} = require("../controller/userController");
const upload_img = require("../multer/imgUpload");
const userRoute=express.Router();
userRoute.get("/",userGet);
userRoute.post("/",upload_img.single('img'),userPost);

userRoute.get("/list",userList);
userRoute.post("/update",upload_img.single('img'),userUpdate);
userRoute.get("/view/:id",userView);
userRoute.get("/edit/:id",userEdit);
userRoute.get("/delete/:id",userDelete);
module.exports=userRoute;