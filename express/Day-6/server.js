// const crypto=require("crypto");
// console.log(crypto.randomBytes(4).toString("hex"));
require("dotenv").config();
const express=require("express");
const path=require("path");
const e_session=require("express-session");
const ejs=require("ejs");
const bp=require("body-parser");
const app=express();
app.use(e_session({
    secret:"name",
    resave:false,
    saveUninitialized:true,
    cookie:{secure:false}
}));
app.use(bp.urlencoded({extended:false}));
app.set("view engine",ejs)
app.use(express.static(path.join(__dirname,"views")))
app.use("/img",express.static(path.join(__dirname,"uploads")))
const homeRouter = require("./routes/home");
app.use(homeRouter);
app.listen(process.env.PORT)