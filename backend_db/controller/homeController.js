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
        Swal.fire({
            title: "Custom animation with Animate.css",
            showClass: {
              popup: `
                animate__animated
                animate__fadeInUp
                animate__faster
              `
            },
            hideClass: {
              popup: `
                animate__animated
                animate__fadeOutDown
                animate__faster
              `
            }
        });
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
    res.send(viewSingleUser)
}
const userDelete=async(req,res)=>{
    const {id}=req.params;
    await userSchema.findByIdAndDelete({_id:id})
    .then(()=>{
        res.json({message:"User deleted"})
    })
    .catch((e)=>{
        res.send(e.message);
    })
}
module.exports={homeGetControl,homePostControl,listControl,userDelete,userView};