const moongoose=require("mongoose")
const userSchema=moongoose.model("users",{
    name:String,
    age:Number
})
module.exports=userSchema;