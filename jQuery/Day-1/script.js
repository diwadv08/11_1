$(document).ready(function(){
    let height=100;
    let width=100;
    
    let divStyle={
        backgroundColor:'red',
        height:height+'px',
        width:width+'px',
    }
    $("div").css(divStyle);
    $("div").click(function(){
        height+=20;
        width+=20;
        divStyle.height=height;
        divStyle.backgroundColor="orange";
        divStyle.width=width;
        $("div").css(divStyle);
    })
    $(".hide").click(function(){
        $("p").hide(1000);
    })
    $(".show").click(function(){
        $("p").show(1000);
    })
    $(".toggle").click(function(){
        $("p").toggle(1000);
    })


})


// alert(document.querySelector("button").innerHTML)
// alert(document.querySelector("button").innerText)

// document.querySelector("div").innerHTML='<h1>Hello</h1>'
// document.querySelector("div").innerText='<h1>Hello</h1>'
// alert(this.innerHTML)
        // alert($(this).html())
        // $("p").toggle()
        // $("p").show()
        // $("p").show(1000)

        // this.innerHTML='World';
        // $(this).html('Bye');

        // https://ilifeacademy.in/blog.php?category=All