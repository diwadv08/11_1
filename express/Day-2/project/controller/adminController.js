const path=require("path")
const adminHome=(req,res)=>{
    res.send("Admin - Home Page")
}
const adminAbout=(req,res)=>{
    res.send("Admin - About Page")
}
const adminContact=(req,res)=>{
    res.send(`<img src="" alt="jkgjh">
        Admin - Contact Page`)
}
module.exports={adminHome,adminAbout,adminContact}