const homeController=(req,res)=>{
    let user=[
        {
            name:"Harish",age:10
        },
        {
            name:"Varun",age:20
        },
    ];
    let name=10;
    
    res.render("new/2.hbs",{user,name})
}
const aboutController=(req,res)=>{
    res.render("new/3.hbs")
}
const contactController=(req,res)=>{
    res.render("new/4.hbs")
}
module.exports={homeController,aboutController,contactController};
