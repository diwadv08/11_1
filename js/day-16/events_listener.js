const button=document.querySelectorAll("button");
const div=document.querySelector("div");
div.style.background='red';
div.style.height='200px';
div.style.width='200px';
const myFun=(e)=>{
   alert(e.target.innerHTML);
}
button[1].addEventListener('click',()=>{
    button[0].addEventListener('click',myFun)
})

button[2].addEventListener('click',()=>{
    button[0].removeEventListener('click',myFun)
})


window.addEventListener('scroll',()=>{
    console.log(window.pageYOffset)
    if(window.pageYOffset>=50){
        div.style.background='blue';
    }
    else{
        div.style.background='red';
    }
})


document.querySelector("input").focus();