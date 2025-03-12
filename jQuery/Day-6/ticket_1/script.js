$(document).ready(function(){
   let seats='';
   let seatNames=['','a','b','c','d','e','f','g','h','i','j','k','l'];
    let prices={
        premium:150,
        normal:120,
        front:70
    }
   for(let j=1;j<=10;j++){
    if(j>=1 && j<=3){
        seats+=`<div class='premium'>${seatNames[j].toUpperCase()}-`
    }
    else if(j>=4 && j<=8){
        seats+=`<div class='normal'>${seatNames[j].toUpperCase()}-`
    }
    else if(j>=9 && j<=10){
        seats+=`<div class='low'>${seatNames[j].toUpperCase()}-`
    }
    for(let i=1;i<=15;i++){
        seats+=`<span data-bs-target="#myModal" data-bs-toggle="modal" class='${seatNames[j].toUpperCase()}-${i}' >${i}</span>`
    }
    seats+=`</div>`
   }
   $(".tickets").html(seats)
   let result_tickets,btnCss;
   $("span").click(function(){
        let spanClass=$(this).attr('class');
        let nearDiv=$(this).closest('div');
        let divClass=nearDiv[0].className;
        if(divClass=='premium'){
            btnCss='background:purple';
        }
        else if(divClass=='normal'){
            btnCss='background:green';
        }
        else if(divClass=='low'){
            btnCss='background:grey';

        }

        result_tickets=`<h5>${spanClass}</h5><button class='btn' style='${btnCss}'>${divClass.toUpperCase()}</button><h5>Rs.${prices[divClass]}</h5><button class='btn btn-success book_now' id='${spanClass}' data-bs-dismiss='modal'>Book Now</button>`
        $(".modal-body").html(result_tickets)


        $(".book_now").click(function(){
            let id=$(this).attr('id');
            $("."+id).attr('class',id+' disabled')
        })
   })
})