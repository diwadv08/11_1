const link=document.createElement("link");
link.setAttribute("rel","stylesheet");
link.setAttribute("href","assets/css/style.css");


const header_links=["home","about","contact","vission"];
const carousel_images=["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg"];
let links="";
for(let i=0;i<header_links.length;i++){
    if(i==0){
        links+=`<li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#${header_links[i]}" onclick="MyFun(this)">${header_links[i]}</a>
        </li>`;
    }
    else{
        links+=`<li class="nav-item">
          <a class="nav-link" aria-current="page" href="#${header_links[i]}" onclick="MyFun(this)">${header_links[i]}</a>
        </li>`;
    }
    
}


function MyFun(e){
   var prev_active=document.querySelector(".nav-item>.active");
   prev_active.className="nav-link";
   e.className="nav-link active";
}
let carousel_indicators="";

let carousel_items="";
for(let i=0;i<carousel_images.length;i++){
    if(i==0){
        carousel_indicators+=`<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="${i}" class="active" aria-current="true" aria-label="Slide 1"></button>`
        carousel_items+=`<div class="carousel-item active">
        <img src="assets/images/${carousel_images[i]}" class="d-block w-100" alt="...">
      </div>`
    }
    else{
        carousel_indicators+=`<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="${i}" aria-current="true" aria-label="Slide 1"></button>`
        carousel_items+=`<div class="carousel-item">
        <img src="assets/images/${carousel_images[i]}" class="d-block w-100" alt="...">
      </div>`
    }
  
}



const header=`<nav class="navbar navbar-expand-lg navbar-light bg-danger fixed-top">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav m-auto mb-2 mb-lg-0">
       ${links}
      </ul>
    </div>
  </div>
</nav>`;



const carousel=`<div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
   ${carousel_indicators}
  </div>
  <div class="carousel-inner">
    ${carousel_items}
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
const about=`<div class="container py-5">
    <div class="row py-5">
        <div class="col-6">
            <h1>Hello</h1>
        </div>
        <div class="col-6">
            <h1>Hello</h1>
        </div>
    </div>
    </div>`






    

document.body.innerHTML=header;
document.body.innerHTML+=carousel;
document.body.innerHTML+=about;
document.head.appendChild(link)