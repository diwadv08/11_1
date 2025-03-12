// for(let j=1;j<=30;j++){
//     for(let i=j;i<=30;i++){
//         document.write("*")
//     }
//     document.write('<br>')
// }


// for(let j=1;j<=15;j++){
//     for(let i=1;i<=30;i++){
//         document.write(i+"*"+j+"="+(i*j))
//         document.write('<br>')
//     }
//     document.write('<hr>')
// }

// var a=[1,5,4,9,30,35,90,50,70];

// var odd="",even='';

// for(let i=0;i<a.length;i++){
//    if(a[i]%2==0){
//     even+=a[i]+-para','
//    }
//    else{
//     odd+=a[i]+','
//    }
// }

// document.write(odd+'-odd<br>')
// document.write(even+'-even')
// var h1=['Hi','hello','Bye','World'];
// var icons=['circle','square','box','users'];
// var p=['Hi-para','hello-para','Bye-para','World'];
// document.write(` <div class="container-fluid bg-success py-5 text-light">
//         <div class="container text-center">
//             <div class="row">`)
//         for(i=0;i<h1.length;i++){
//             document.write(`<div class="col-3">
//                     <h1>${h1[i]}</h1>
//                     <p>${p[i]}</p>
//                     <i class="fa fa-${icons[i]}"></i>
//                 </div>`)
//             }


// document.write(`
//             </div>
//         </div>
//     </div>`)
for(j=1;j<=15;j++){
    for(i=1;i<=3;i++){
        document.write(i+"*"+j+"="+(i*j))
        document.write("<br>")
    }
    document.write("<hr>")
}