const express=require("express");
const app=express();
const user=require("./routes/user");
const admin=require("./routes/admin");
const bp=require("body-parser");
app.use(bp.urlencoded({extended:false}))
app.use(user);
app.use("/user",user);
app.use("/admin",admin);
app.get("*",(req,res)=>{
    res.redirect("/")
})
app.listen(9000)