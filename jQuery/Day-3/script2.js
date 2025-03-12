$(document).ready(function(){
//    alert($("input").attr('type'))

//    $("input").keyup(function(){
//         // alert(this.value)
//         alert($(this).val())
//    })

$("i").css({
    position:'relative',
    left:'-27px',
    fontSize:'12px'
})

    $("i").click(function(){
        if($(this).attr('class').includes('slash')){
            $(this).attr('class','fa fa-eye')
            $("input").attr('type','text')
        }
        else{
            $(this).attr('class','fa fa-eye-slash')
            $("input").attr('type','password')
        }
    })
})