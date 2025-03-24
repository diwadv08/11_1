const defaultPath=(req,res)=>{
    res.render("default.ejs")
}
const loginGetPath=(req,res)=>{
    res.render("login.ejs")
}
const loginPostPath=(req,res)=>{
    const {name,age}=req.body;
    const details={
        name:"",
        age:"",
        image:""
    };
    details.name=name;
    details.age=age;
    if(req.file){
        details.image=req.file.filename;
    }
    req.session.user=name;
    req.session.user=details;
    res.render("home.ejs",{details})
}
const homePath=(req,res)=>{
    if(req.session.user){
        const details={
            name:req.session.user.name,
            age:req.session.user.age,
            image:req.session.user.image
        };
        res.render("home.ejs",{details})
    }
    else{
        res.redirect("/")
    }
}
const aboutPath=(req,res)=>{
    let name="About";
    if(req.session.user){
        res.render("about.ejs",{name})
    }
    else{
        res.redirect("/")
    }
}
const contactPath=(req,res)=>{
    let name="Contact";
    if(req.session.user){
        res.render("contact.ejs",{name})
    }
    else{
        res.redirect("/")
    }
}
const logoutPath=(req,res)=>{
    req.session.destroy();
    res.send("<h1>Logout Success</h1>")
}

module.exports={homePath,aboutPath,contactPath,logoutPath,defaultPath,loginGetPath,loginPostPath}