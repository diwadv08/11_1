const express=require("express");
const app=express();
const bp=require("body-parser");
const ejs=require("ejs");
const path=require("path");
const home = require("./routes/home");
app.set("view engine",ejs);
app.use(bp.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,"views")))
app.use("/image",express.static(path.join(__dirname,"uploads")))

app.use(home);
app.post('/',)
app.listen(9000)


// https://muz.li/inspiration/forms/