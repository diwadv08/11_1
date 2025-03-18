const express=require("express");
const app=express();
app.use((req,res,next)=>{
    console.log(req.url+"--"+req.method);
    next();
})
app.get('/',(req,res)=>{
    res.send('Hello')
})
app.get('/home',(req,res)=>{
    res.send('Hello')
})
app.get('*',(req,res)=>{
    res.status(404)
    res.send('<center><h1>Page Not Found</h1></center>')
})

app.listen(9000)