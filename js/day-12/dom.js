// var h2=document.createElement('h2');
// var h1=document.createElement('h1');
// h1.innerHTML='Hello <span style="color:red">Bye</span>';
// h2.innerText='Hello <span style="color:red">Bye</span>';
// document.body.appendChild(h1);
// document.body.appendChild(h1);
// document.body.appendChild(h2);


// var h1=document.createElement('h1');
// h1.innerHTML='Hello';
// document.body.appendChild(h1);


// var h1=document.createElement('h1');
// var marquee=document.createElement('marquee');
// h1.innerHTML='Hi';
// marquee.setAttribute('scrollamount','100');
// marquee.setAttribute('behavior','slide');
// marquee.appendChild(h1);
// document.body.appendChild(marquee);


// var button=document.createElement('button');
// var link=document.createElement('link');
// link.setAttribute('href','https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css');
// link.setAttribute('integrity','sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg==');
// link.setAttribute('crossorigin','anonymous');
// link.setAttribute('rel','stylesheet');
// link.setAttribute('referrerpolicy','no-referrer');

// button.innerHTML='<i class="fa fa-lock"></i>Login';
// button.setAttribute("onclick","Func()")

// const Func =()=>{
//     if(button.innerHTML.includes("Logout")){
//         button.innerHTML='<i class="fa fa-lock"></i>Login';
//     }
//     else{
//         button.innerHTML='<i class="fa fa-unlock"></i>Logout';
//     }
// }
// document.title='Day-12';
// document.head.appendChild(link);
// document.body.appendChild(button)


// var a=document.getElementById("h1");  
// console.log(a.innerHTML);

// var ww=document.getElementsByClassName("ww");

// for(let i=0;i<ww.length;i++){
//     console.log("Lopping-"+ww[i].innerHTML);
// }

// var tags=document.getElementsByTagName("h1");

// for(let i=0;i<tags.length;i++){
//     console.log(tags[i].innerHTML);
// }


// var query=document.querySelector(".ww");
// var query=document.querySelectorAll("h1");
// console.log(query);


var h1=document.createElement("h1");
var marquee=document.createElement("marquee");

h1.innerHTML="Hello<span style='color:red'>Bye</span>";
marquee.appendChild(h1)
// h1.innerText="Hello<span style='color:red'>Bye</span>";
document.body.appendChild(marquee);
