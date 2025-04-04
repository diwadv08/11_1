const userTable = require("../models/userData");
const fs=require("fs");
const path=require("path");
const userGet=(req,res)=>{
    res.render("add_user.ejs");
}
const userPost=async(req,res)=>{
    const{name,age,mobile,pwd,dob}=req.body;
    const formDetails={
        name,age,mobile,pwd,dob
    }
    if(req.file){
        formDetails.img=req.file.filename;
    }
    const userRecords=new userTable(formDetails);
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
    const updatedRecords={name,age,mobile,pwd,dob,_id};
    if(req.file){
        const findImg=await userTable.findById(_id);
        fs.unlinkSync(path.join(__dirname,"..","uploads",findImg.img))
        updatedRecords.img=req.file.filename;
    }
    await userTable.findByIdAndUpdate(_id,updatedRecords)
    .then(()=>{
        res.redirect("/list")
    })
    .catch((e)=>{
        res.send(e.message);
    })
}
const userDelete=async(req,res)=>{
    const {id} =req.params;
    const findImg=await userTable.findById(id);
    fs.unlinkSync(path.join(__dirname,"..","uploads",findImg.img))
    await userTable.findByIdAndDelete(id)
    .then(()=>{
        res.redirect("/list")
    })
    .catch((e)=>{
        res.send(e.message);
    })
}

module.exports={userGet,userList,userPost,userView,userEdit,userDelete,userUpdate};

