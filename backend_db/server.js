require("dotenv").config();
const PORT=process.env.PORT;
const express=require("express");
const app=express();
const mongoose=require("mongoose");
const bp=require("body-parser");
const path=require("path");
const ejs=require("ejs");

const homeRouter = require("./routes/homeRoute");
app.use(bp.urlencoded({extended:false}))
mongoose.connect(process.env.MONGODB_URL);
app.use(express.static(path.join(__dirname,"views")));
app.set("view engine",ejs);
app.use(homeRouter)
app.listen(PORT)