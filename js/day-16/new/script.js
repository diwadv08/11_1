let button=document.querySelectorAll("button");


function Function0(){
    alert(10)
}

button[1].addEventListener('click',()=>{
    alert('Event added to click btn')
    button[0].addEventListener('click',Function0)
})
button[2].addEventListener('click',()=>{
    alert('Event disabled')
    button[0].removeEventListener('click',Function0)
})