// Animate
$(document).ready(function(){
    let a={
        background:'red',
        height:'100px',
        width:'100px',
    }
    // let animateCss1={
    //     marginLeft: '250px',
    //     height: '+=150px',
    //     width: '+=150px'
    // }
    // let animateCss2={
    //     marginLeft: '0',
    //     height: '100px',
    //     width: '100px'
    // }

    let animateCss1={
        width:'200px'
    }
    let animateCss2={
        height:'200px'
    }
    let animateCss3={
        width:'100px'
    }
    let animateCss4={
        height:'100px'
    }
    $("div").css(a)
    // $("button").click(function(){
    //     let div=$("div");
    //     div.animate(animateCss1)
    //     div.animate(animateCss2)
    //     div.animate(animateCss3)
    //     div.animate(animateCss4)
    // })
    let font={
        fontSize:'3rem'
    }
    let width={
        height:'300px',
        width:'300px',
    };
    $("button").click(function(){
        let div=$("div");
        div.animate(width)
        div.animate(font)
    })
})