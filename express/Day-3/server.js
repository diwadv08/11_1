const express=require("express");
let PORT=9000;
const fs=require("fs");
const home = require("./routes/home");
const ejs=require("ejs");
const path=require("path");
const app=express();
app.use("/imagePath",express.static(path.join(__dirname,"views","images")))

app.use("/work_image",express.static(path.join(__dirname,'images')));
app.get("/image/users/:imgName",(req,res)=>{
    let name=req.params.imgName;
    let imgName=`${name}.jpg`;
    if(fs.existsSync(path.join(__dirname,"views","images",imgName))){
        res.send(`<img src="/work_image/${name}.jpg">`)   
    }
    else{
        res.send("<h1>No Image</h1>")
    }
})
app.use(home);
app.set("view engine",ejs)
app.listen(PORT)