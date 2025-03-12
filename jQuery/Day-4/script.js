$(document).ready(function(){
    // $(".btn1").click(function(){
    //     $("div").addClass('box1 box')
    // })
    // $(".btn2").click(function(){
    //     // alert($("div").hasClass('box'))
    //     if($("div").hasClass('box')){
    //         $("div").removeClass('box')
    //     }
    //     else{
    //         alert('No class name "Box"')
    //     }
    // })


    // $("button").click(function(){
    //     $("p").remove();
    //     $("p").empty();
    //     $("p").hide();
    // })

    // $("button").click(function(){
    //     $("p").prepend('Bye');
    //     $("p").append('Bye');
    // })

    let a=0;
    // $("button").click(function(){
    //     $("p").append(`<b>Bye-${a+=1} </b>`);
    //     $("b").click(function(){
    //         $(this).remove();
    //     })
    // })


    let view=$(".view");
    let delete1=$(".delete");
    let tr=$("tr");
    let read=$(".read");
    console.log(view.length);
    

    for(let i=0;i<view.length;i++){
        view[i].id="view-"+(i+1);
        delete1[i].id="delete-"+(i+1);
        read[i].id="read-"+(i+1);
    }


    for(let i=1;i<=view.length;i++){
        tr[i].id="tr-"+(i);
    }


    $(".delete").click(function(){
        let id=($(this).attr('id'))
        let new_id=(id[id.length-1])

        $("#tr-"+new_id).remove();
    })

})