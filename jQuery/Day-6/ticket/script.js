// $(document).ready(function(){
//     let seats='';
//     let seatNames=['','a','b','c','d','e','f','g','h','i','j','k','l'];
//     let prices={
//         premium:150,
//         normal:120,
//         front:70
//     }
//     for(let j=1;j<=10;j++){
//         if(j>=1 && j<=2){
//             seats+=`<div class='seats seats_${j} premium'>${seatNames[j].toUpperCase()}-`
//         }
//         else if(j>=3 && j<=8){
//             seats+=`<div class='seats seats_${j} normal'>${seatNames[j].toUpperCase()}-`
//         }
//         else if(j>=9 && j<=10){
//             seats+=`<div class='seats seats_${j} front'>${seatNames[j].toUpperCase()}-`
//         }
        
//         for(let i=1;i<=15;i++){
//             seats+=`<span class='${seatNames[j].toUpperCase()}-${i}' data-bs-toggle='modal' data-bs-target='#myModal'>${i}</span>`
//         }
//         seats+=`</div>`
//     }

//     $(".tickets").html(seats)
    
//     let result_ticket=''; 
//     $("span").click(function(){
//         let spanClass= this.className;

//         let nearDiv=$(this).closest('div');
//         let divClass=nearDiv[0].className;
//         let classArr=divClass.split(' ');
        
//         let bg='black';

//         if(classArr[2]=='premium'){
//             bg='purple'
//         }
//         else if(classArr[2]=='front'){
//             bg='grey'

//         }
//         else if(classArr[2]=='normal'){
//             bg='green'

//         }
//         let btnCsss=`color:white;background:${bg}`;

//         result_ticket=`
//         <h3>${spanClass}</h3>
//         <button class='btn' style=${btnCsss}>${classArr[2].toUpperCase()}</button>
//         <p>Rs.${prices[classArr[2]]}</p>
//         <button data-bs-dismiss='modal' id='${spanClass}' class='btn btn-danger book_now'>Book Now</button>
//         `
//         $(".modal-body").html(result_ticket)

//         $(".book_now").click(function(){
//             let name=$(this).attr('id');
//             let className=$("."+name).attr('class');

//             $("."+name).attr('class',className+' disabled')
//             // $("."+name).attr('class')
//         })

//     })
// })




