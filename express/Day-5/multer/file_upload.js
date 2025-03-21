const multer=require("multer");
const path=require("path");
let storage=multer.diskStorage({
    destination:"./uploads",
    filename:(req,file,cb)=>{
        cb(null,"IMAGE_"+Date.now()+path.extname(file.originalname))
    }
})
const upload11=multer({storage})

module.exports=upload11;