const mongoose=require("mongoose");

const userTable=mongoose.model("usersData",{
    name:String,
    age:Number,
    mobile:String,
    pwd:String,
    dob:Date,
    img:String
});

module.exports=userTable;