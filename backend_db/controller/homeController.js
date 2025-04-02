const userSchema = require("../models/db");

const homeGetControl=(req,res)=>{
    res.render("home.ejs");
}
const listControl=async(req,res)=>{
    let userTable=await userSchema.find();
    res.render("list.ejs",{userTable});
}
const homePostControl=async(req,res)=>{
    let {name,age}=req.body;
    let user=new userSchema({
        name,age
    });
    await user.save()
    .then(()=>{
        res.redirect("/list")
    })
    .catch((e)=>{
        console.log(e.name)
        console.log(e.message)
        console.log(e._message)
    })
}
const userView=async(req,res)=>{
    const {id}=req.params;
    const viewSingleUser=await userSchema.findById(id);
    res.render("view.ejs",{viewSingleUser})
}
const userEdit=async(req,res)=>{
    const {id}=req.params;
    const editSingleUser=await userSchema.findById(id);
    res.render("edit.ejs",{editSingleUser})
}
const userEditPost=async(req,res)=>{
    let {name,age,_id}=req.body;
    await userSchema.findByIdAndUpdate(_id,{name,age})
    .then(()=>{
        res.redirect("/list")
    })
}
const userDelete=async(req,res)=>{
    const {id}=req.params;
    await userSchema.findByIdAndDelete({_id:id})
    .then(()=>{
        res.redirect("/list")
    })
    .catch((e)=>{
        res.send(e.message);
    })
}
module.exports={homeGetControl,homePostControl,listControl,userDelete,userView,userEdit,userEditPost};