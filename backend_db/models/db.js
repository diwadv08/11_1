const moongoose=require("mongoose")
const userSchema=moongoose.model("staffs",{
    name:String,
    age:Number
})
module.exports=userSchema;