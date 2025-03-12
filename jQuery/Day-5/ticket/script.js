$(document).ready(function(){
    let seats='';
    let seatNames=['','a','b','c','d','e','f','g','h','i','j','k','l']
    for(let j=1;j<=10;j++){
        if(j>=1 && j<=2){
            seats+=`<div class='seats seats_${j} premium'>${seatNames[j].toUpperCase()}-`
        }
        else if(j>=3 && j<=8){
            seats+=`<div class='seats seats_${j} normal'>${seatNames[j].toUpperCase()}-`
        }
        else if(j>=9 && j<=10){
            seats+=`<div class='seats seats_${j} front'>${seatNames[j].toUpperCase()}-`
        }
        
        for(let i=1;i<=15;i++){
            seats+=`<span class='${seatNames[j].toUpperCase()}-${i}' data-toggle='modal' data-target='#ticketmodal'>${i}</span>`
        }
        seats+=`</div>`
    }

    $("div").html(seats)
})