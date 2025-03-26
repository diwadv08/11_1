const express=require("express");
const app=express();

const checkUser=(req,res,next)=>{
    const userData=true;
    if(userData){
        next();
    }
    else{
        res
        .status(404)
        .json("Error!")
    }
}
const fetchData=(req,res,next)=>{
    let user_id=req.params.id;
    let details={
        id:user_id,
        name:"Harish"
    }
    req.cc=details;
    next();
}
app.get("/",checkUser,(req,res)=>{
    res.send("User there")
})
app.get("/user/:id",checkUser,fetchData,(req,res)=>{
    res.send(req.cc)
})

app.get('*', (req, res, next) => {
    const err = new SyntaxError('Page Not Found');
    err.status = 404;
    next(err); // Pass error to next middleware
});
let j=(err, req, res, next) => {
    console.log(err.status)
    console.log(err.name)
    console.log(err.message)
    next()
}
app.use(j);

app.listen(9000)