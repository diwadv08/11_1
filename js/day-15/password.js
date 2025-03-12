let submit=document.querySelector("#submit");
submit.style.display="none";
let pwd2=document.querySelector("#pwd");
// pwd2.style.display="none";

const Typing=()=>{
    let error1=document.querySelector("#error1");
    let error2=document.querySelector("#error2");
    let error3=document.querySelector("#error3");
    let error4=document.querySelector("#error4");
    
    let pwd=document.querySelector("#pwd").value;
    let j=pwd.split('');
    let special_charcters=['@','$','&','!'];
    if(pwd.length>0){
        const res=j.filter((e)=>{
            return isFinite(e)
        })
        const special=j.filter((e)=>{
            return e===special_charcters[0]|| e===special_charcters[1] || e===special_charcters[2] || e===special_charcters[3];
        })
        if(special.length>0){
            error2.style.color="green";
        }
        else{
            error2.style.color="red";
        }
        if(res.length>0){
            error1.style.color="green";
        }
        else{
            error1.style.color="red";
        }
        let first_letter= pwd[0];
        if(first_letter===first_letter.toUpperCase()){
            error3.style.color="green";
        }
        else{
            error3.style.color="red";
        }
        if(pwd.length>=8){
            error4.style.color="green";
        }
        else{
            error4.style.color="red";
        }


        if(error1.style.color==="green" && error2.style.color==="green" && error3.style.color==="green" && error4.style.color==="green" ){
            submit.style.display="inline";
        }
        else{
            submit.style.display="none";
        }
    }
}   


const MyFun=(e)=>{
    e.style.backgroundColor='red';
}