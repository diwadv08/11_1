const path=require("path");
// let ejs2URL=path.join(__dirname,"..","views","2.ejs");
let homeUrl=path.join(__dirname,"..","views","home.ejs");
let aboutUrl=path.join(__dirname,"..","views","about.ejs");
let contactUrl=path.join(__dirname,"..","views","contact.ejs");
const homePath=(req,res)=>{
    // let names=[
    //     {
    //         name:"Hari",
    //         age:"22",
    //         pwd:"123"
    //     },
    //     {
    //         name:"Harish",
    //         age:"12",
    //         pwd:"126#$"
    //     },
    //     {
    //         name:"Ravi",
    //         age:"2",
    //         pwd:"22123"
    //     },

    // ]
    // res.render(ejs2URL,{names})
    res.render(homeUrl,{title:"Home"})
}
const aboutPath=(req,res)=>{
    res.render(aboutUrl,{title:"About"})
}
const contactPath=(req,res)=>{
    res.render(contactUrl,{title:"Contact"})
}

module.exports={homePath,aboutPath,contactPath};