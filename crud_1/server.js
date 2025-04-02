require("dotenv").config();
const PORT=process.env.PORT;
const express=require("express");
const app=express();
const path=require("path");
const ejs=require("ejs");
const bp=require("body-parser");
const userRoute = require("./routes/userRoute");
const connect_db = require("./models/connection");
connect_db();
app.set("view engine",ejs)
app.use(bp.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,"views")));
app.use(userRoute)
app.listen(PORT);