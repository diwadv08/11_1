// async function a(a1){
//     return a1;
// }

// (async function name() {
//     let j=await a(10);
//     console.log(j);
// })()


const bcrypt=require("bcrypt");
let mypwd="123";
const hashGen=async()=>{
    const hash=bcrypt.hash(mypwd,10);
    return hash;
}
const hashCompare=async(a,b)=>{
    const compare=bcrypt.compare(b,a);
    return compare;
}
(async function name() {
    let encrptPassword=await hashGen();
    let result=await hashCompare(encrptPassword,"12356");
    console.log(result);
})()
