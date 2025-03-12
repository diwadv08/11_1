let span=document.querySelector("span");
let num=Number(span.innerHTML);

function Inc(){
    if(num<500){
        num+=1;
        span.innerHTML=num;
    }
}
setInterval(Inc,0)