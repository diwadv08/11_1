// $(document).ready(function(){
//     $("p").hide();
//     $("button").click(function(){
//         $("p").show(3000);
//         $("p").hide(3000);
//         $("p").toggle(3000);
//     })
// })

$(document).ready(function(){
    // $("button").click(function(){
    //     alert('Clicked')
    // })
    let boxCss={
        height:'300px',
        width:'300px',
        background:'linear-gradient(to right,red,blue)',
    }
    $(".box1").css(boxCss);

    $("button").click(function(){
        // $(".box1").fadeToggle(200,0.1);
        // $(".box1").fadeIn(200,0.1);
        // $(".box1").fadeOut(200,0.1);
        // $(".box1").fadeTo(200,0.1);
        // $(".box1").slideDown(200);
        // $(".box1").slideUp(200);
        // $(".box1").slideToggle(200);
    })
    $(".box1").click(function(){
        $(this).slideUp(4000)
    })  
    $(".stop").click(function(){
        $(".box1").stop();
    })

    // $("button").on({
    //     click:function(){
    //         alert('Clicked')
    //     },
    //     mouseover:function(){
    //         alert('mouse over')
    //     },
    //     mouseout:function(){
    //         alert('mouse out')
    //     }
    // })
    // $("button").on("click mouseover mouseout",function(e){
    //     if(e.type=='mouseout'){
    //         alert('Out')
    //     }
    //     if(e.type=='mouseover'){
    //         alert('In')
    //     }
    // })
    
})
