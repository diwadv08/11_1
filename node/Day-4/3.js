const a=new Promise((a,b)=>{
    let a1=false;
    if(a1){
        a('I am Success')
    }
    else{
        b('I am Error')
    }
})
a
.then((data)=>{
    setTimeout(()=>{
        console.log(data);
    },2000)
})
.catch((err)=>{
    setTimeout(()=>{
        console.log(err);
    },2000)
})
.finally(()=>{
    console.log("Waiting for Result.....")
})