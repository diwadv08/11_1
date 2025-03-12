let nav_links=["Home","About","Contact","Email","Help"];
let crs_img=["0.jpg","1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg"];
let myLinks='';
let crsDiv='';
let crsIndicators='';

let c=crs_img.map((e,i1)=>{
    if(i1==0){
      crsIndicators+=`<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to='${i1}' class="active" aria-current="true" aria-label="Slide 1"></button>`
       crsDiv+=`<div class="carousel-item active">
            <img src="assets/images/${e}" class="d-block w-100" alt="..." height='550px'>
        </div>`;   
    }
    else{
      crsIndicators+=`<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to='${i1}' class="active" aria-current="true" aria-label="Slide 1"></button>`
       crsDiv+=`<div class="carousel-item">
            <img src="assets/images/${e}" class="d-block w-100" alt="..." height='550px'>
        </div>`;
    }

})
let b=nav_links.map((e,i)=>{
    if(i==0){

        myLinks+=`<a href='#'class='nav-link active' onclick='MyFun(this)'>${e}</a>`;
    }
    else{
        myLinks+=`<a href='#'class='nav-link' onclick='MyFun(this)'>${e}</a>`;
    }
})

    let a=`<nav class="navbar navbar-expand-lg navbar-dark bg-danger fixed-top">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Navbar</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav m-auto mb-2 mb-lg-0">
               ${myLinks}
            </ul>
            <form class="d-flex">
              
              <button class="btn btn-dark" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>`;



      let carousel=`<div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    
                    ${crsIndicators}
                </div>
                <div class="carousel-inner">
                  ${crsDiv}
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
                </div>`
      function MyFun(e){
        let active_link=document.querySelector(".navbar-nav .active");
        
        active_link.className='nav-link';
        e.className='nav-link active';  
      }

document.body.innerHTML+=carousel;
document.body.innerHTML+=a;