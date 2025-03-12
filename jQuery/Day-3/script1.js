$(document).ready(function(){
    let div=$("div")
    let divCss={
        background:'red',
        height:'100px',
        width:'100px'
    }
    div.css(divCss)
    $(".start").click(function(){
        div.slideUp(5000)
    })
    $(".stop").click(function(){
        div.stop();
    })
    $(".chain").click(function(){
        div.css({background:'green'}).animate({marginLeft:'200px'}).slideUp(1000).slideDown(1000).animate({marginLeft:'0px'})
    })
})