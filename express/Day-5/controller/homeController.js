

const homeGet=(req,res)=>{
    res.render('form.ejs')
}
const homePost=(req,res)=>{
    const datas={
        image:"",
        text:"",
        color:""
    }
    if(req.file){
        datas.image=req.file.filename;
    }
    if(req.body){
        datas.text=req.body.content;
        datas.color=req.body.color;
    }
    res.render('response.ejs',{datas});
}


module.exports={homeGet,homePost};