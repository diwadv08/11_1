
for(let i=1;i<=10;i++){
    if(i%2==0){
        document.write(i+'-even<br>')
    }
    else{
        document.write(i+'-odd<br>')
        
    }
}


// greater than --
// lesser than ++



var odd="";
var even="";
for(let i=1;i<=100;i++){
    if(i%2==0){
        even+=i+',';
    }
    else{
        odd+=i+',';
    }
}

document.write(odd+'-odd')
document.write("<br>")
document.write(even+'-even')
let len_odd=odd.length-1;
let len_even=even.length-1;
document.write(odd.substr(0,len_odd)+"-ODD<br>")
document.write(even.substr(0,len_even)+"-Even<br>")
