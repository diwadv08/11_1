const mongoose=require("mongoose");
const connect_db=()=>{
    mongoose.connect(process.env.MONGODB_URL)
    .then(()=>{
        console.log("MongoDB Connected Successfully");
    })
    .catch((e)=>{
        console.log(e.message);
    })
}

module.exports=connect_db