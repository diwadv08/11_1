function calc(a,b,c){
    a()
    b()
    c()
}
let j1=()=>{
    setTimeout(()=>{
        console.log('hi')
    },2000)
}
let j2=()=>{
    setTimeout(()=>{
        console.log('hello')
    },5000)
}
let j3=()=>{
    setTimeout(()=>{
        console.log('Welcome')
    },1000)
}
calc(j1,j2,j3) 





// function calc(a){
//     a();
// }
// calc(()=>{
//     console.log(13);
// });