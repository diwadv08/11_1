const express=require("express");
const { homeGet } = require("../controller/homeController");
const upload11 = require("../multer/file_upload");
const home=express.Router();
home.get('/',homeGet)
home.post('/',upload11.single('image'),(req,res)=>{
    const datas={
        image:"",
        text:"",
        color:""
    }
    if(req.file){
        datas.image=req.file.filename;
    }
    if(req.body){
        datas.text=req.body.content;
        datas.color=req.body.color;
    }
    res.render('response.ejs',{datas});
})
module.exports=home;