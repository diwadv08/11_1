
const Form_validate=()=>{
    const name=document.querySelector("#name").value;
    const pwd=document.querySelector("#pwd").value;
    const error=document.querySelector("#error");
    if(name!="admin" || pwd!="123"){
        error.innerHTML="Invalid Login";
        return false;
    }
}