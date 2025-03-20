const express=require("express");
const path=require("path");
const hbs=require("hbs");
const home = require("./routes/home");
const app=express();
app.set('view engine',hbs);
// include
hbs.registerPartials(path.join(__dirname,"views","common"));
// just call
app.use(express.static(path.join(__dirname,"views")));
app.use(home);
app.listen(9000);