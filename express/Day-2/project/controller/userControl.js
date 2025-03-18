const path=require("path");


const homePage=(req,res)=>{
    res.send("User - Home Page")
}
const aboutPage=(req,res)=>{
    res.send("User - About Page")
}
const contactPageGet=(req,res)=>{
    res.sendFile(path.join(__dirname,"..","html","form.html"))
}
const contactPagePost=(req,res)=>{
    const {name,age,pwd}=req.body;
    res.send(name+"--"+age+"--"+pwd);
}
module.exports={homePage,aboutPage,contactPageGet,contactPagePost}