const express=require("express");
const path=require("path");
const bp=require("body-parser");
const app=express();
const session=require("express-session");
app.use(bp.urlencoded({extended:false}));
app.use(session({
    secret:"SECRET",
    resave:false,
    saveUninitialized:true,
    cookie:{secure:false}
}))
app.get("/",(req,res)=>{
    res.send("Login <a href='/login'>Login</a>");
})
app.get("/login",(req,res)=>{
    res.sendFile(path.join(__dirname,"form.html"));
})
app.get("/profile",(req,res)=>{
    if(req.session.userName){
        res.send(`Welcome ${req.session.userName} <a href='/logout'>Logout</a>`);
    }
    else{
        res.redirect("/");
    }
})
app.get("/logout",(req,res)=>{
    req.session.destroy();
    res.send("Logout !");
})
app.post("/login",(req,res)=>{
    req.session.userName=req.body.name;
    res.redirect("/profile")
})
app.listen(9000)


