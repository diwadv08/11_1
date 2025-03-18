const express=require("express");
const path=require("path");
const app=express();

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,'html','1.html'))
})

app.get("/home",(req,res)=>{
    res.sendFile(path.join(__dirname,'html','2.html'))
})

app.get("/welcome/:name",(req,res)=>{
    res.send(`Welcome-${req.params.name}`);
})

app.get("*",(req,res)=>{
    res.sendStatus=404;
    res.sendFile(path.join(__dirname,'html','404.html'))
})
app.listen(8080);