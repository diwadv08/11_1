const multer=require("multer");
const path=require("path");
const storage=multer.diskStorage({
    destination:"./uploads",
    filename:(req,file,cb)=>{
        cb(null,"Img-"+Date.now()+path.extname(file.originalname))
    }
})
const upload_img=multer({storage});
module.exports=upload_img;