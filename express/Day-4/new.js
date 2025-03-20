const bcrypt=require("bcrypt");
const pwd="123456";
const hashGen=async()=>{
    const a=bcrypt.hash(pwd,10);
    return a;
}
const hashCompare=async(a,b)=>{
    const compare=bcrypt.compare(b,a);
    return compare
}
(async()=>{ 
    let k=await hashGen();
    let num="123456";
    let res=await hashCompare(k,num);
    console.log(k);
    console.log(res);
})()