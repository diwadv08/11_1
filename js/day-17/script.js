let span=document.querySelector("span");
let button=document.querySelectorAll("button");
let num=Number(span.innerHTML);
// function Minus(){
//     num-=1;
//     span.innerHTML=num;
// }
// function Plus(){
//     num+=1;
//     span.innerHTML=num;
// }
console.log(button);

button[0].addEventListener('click',()=>{
    if(num>0){
        num-=1;
        span.innerHTML=num;
    }
})
button[1].addEventListener('click',()=>{
    if(num<10){
        num+=1;
        span.innerHTML=num;
    }
})


