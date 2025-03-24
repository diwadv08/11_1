const express=require("express");
const { homePath, aboutPath, contactPath, logoutPath, defaultPath,loginGetPath,loginPostPath } = require("../controller/homeController");
const uploads = require("../multer/multer");
const homeRouter=express.Router();
homeRouter.get('/',defaultPath);
homeRouter.get('/login',loginGetPath);
homeRouter.post('/login',uploads.single('img'),loginPostPath);
homeRouter.get('/home',homePath);
homeRouter.get('/about',aboutPath);
homeRouter.get('/contact',contactPath);
homeRouter.get('/logout',logoutPath);

module.exports=homeRouter;