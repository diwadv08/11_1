const express=require("express");
const { homeGet, homePost } = require("../controller/homeController");
const upload11 = require("../multer/file_upload");
const home=express.Router();
home.get('/',homeGet)
home.post('/',upload11.single('image'),homePost);
module.exports=home;