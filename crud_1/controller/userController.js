const userTable = require("../models/userData");

const userGet=(req,res)=>{
    res.render("add_user.ejs");
}
const userPost=async(req,res)=>{
    const{name,age,mobile,pwd,dob}=req.body;
    const userRecords=new userTable({
        name,age,mobile,pwd,dob
    })
    await userRecords.save()
    .then(()=>{
        res.redirect("/list")
    })
    .catch((e)=>{
        res.send(e.message)
    })
}
const userList=async(req,res)=>{
    const allUsers=await userTable.find();
    res.render("list.ejs",{allUsers});
}
const userView=async(req,res)=>{
    const {id} =req.params;
    const userView=await userTable.findById(id);
    res.render("view.ejs",{userView});
}
const userEdit=async(req,res)=>{
    const {id} =req.params;
    const userEdit=await userTable.findById(id);
    res.render("edit.ejs",{userEdit});
}
const userUpdate=async(req,res)=>{
    const{name,age,mobile,pwd,dob,_id}=req.body;
    await userTable.findByIdAndUpdate(_id,{name,age,mobile,pwd,dob})
    .then(()=>{
        res.redirect("/list")
    })
    .catch((e)=>{
        res.send(e.message);
    })
}
const userDelete=async(req,res)=>{
    const {id} =req.params;
    await userTable.findByIdAndDelete(id)
    .then(()=>{
        res.redirect("/list")
    })
    .catch((e)=>{
        res.send(e.message);
    })
}

module.exports={userGet,userList,userPost,userView,userEdit,userDelete,userUpdate};