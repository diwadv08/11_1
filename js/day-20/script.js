

const row=document.querySelector(".cart_itemss");
const cart_count=document.querySelector(".cart_count");
let modal_Content=document.querySelector(".modal-content");


let products=[
    {
        name:"Data-1",
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, labore voluptas maiores",
        rating:"1.5",
        old_price:"700",
        new_price:"500",
        img:"0",
        added_cart:1
    },
    {
        name:"Data-2",
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, labore voluptas maiores",
        rating:"4.5",
        old_price:"700",
        new_price:"1500",
        img:"1",
        added_cart:1
    },
    {
        name:"T-Shirt",
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, labore voluptas maiores",
        rating:"2.5",
        old_price:"700",
        new_price:"500",
        img:"2",
        added_cart:0
    },
    {
        name:"T-Shirt",
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, labore voluptas maiores",
        rating:"1.5",
        old_price:"700",
        new_price:"500",
        img:"3",
        added_cart:0
    },
    {
        name:"T-Shirt",
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, labore voluptas maiores",
        rating:"3.5",
        old_price:"700",
        new_price:"500",
        img:"4",
        added_cart:0
    },
    {
        name:"T-Shirt",
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, labore voluptas maiores",
        rating:"2.5",
        old_price:"700",
        new_price:"500",
        img:"5",
        added_cart:0
    },
    {
        name:"T-Shirt",
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, labore voluptas maiores",
        rating:"1.5",
        old_price:"700",
        new_price:"500",
        img:"6",
        added_cart:0
    },
    {
        name:"T-Shirt",
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, labore voluptas maiores",
        rating:"2.5",
        old_price:"700",
        new_price:"500",
        img:"7",
        added_cart:0
    },
    {
        name:"T-Shirt",
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, labore voluptas maiores",
        rating:"4.5",
        old_price:"700",
        new_price:"500",
        img:"8",
        added_cart:0
    },
    {
        name:"T-Shirt",
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, labore voluptas maiores",
        rating:"5",
        old_price:"700",
        new_price:"500",
        img:"9",
        added_cart:0
    },
    {
        name:"T-Shirt",
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, labore voluptas maiores",
        rating:"1.5",
        old_price:"700",
        new_price:"500",
        img:"10",
        added_cart:0
    },
    {
        name:"T-Shirt",
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, labore voluptas maiores",
        rating:"2",
        old_price:"700",
        new_price:"500",
        img:"11",
        added_cart:0
    },
    {
        name:"T-Shirt",
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, labore voluptas maiores",
        rating:"4",
        old_price:"700",
        new_price:"500",
        img:"12",
        added_cart:0
    },
    {
        name:"T-Shirt",
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, labore voluptas maiores",
        rating:"3",
        old_price:"700",
        new_price:"500",
        img:"13",
        added_cart:0
    },
    {
        name:"T-Shirt",
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, labore voluptas maiores",
        rating:"2",
        old_price:"700",
        new_price:"500",
        img:"14",
        added_cart:0
    },
    {
        name:"T-Shirt",
        description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, labore voluptas maiores",
        rating:"4.5",
        old_price:"700",
        new_price:"500",
        img:"15",
    },
    
]
let card_data='';
let btn_class='';
products.map((e,i)=>{
    if(e.rating>=1 && e.rating<=2){
        btn_class='danger';
    }
    else if(e.rating>2 && e.rating<4){
        btn_class='warning';
    }
    else if(e.rating>=4){
        btn_class='success';
    }
    card_data+=`
            <div class='col-lg-4 col-md-6 my-2'>
                <div class='card'>
                <img src='images/${e.img}.jpg'>
                    <div class='card-body'>
                        <div class='d-flex justify-content-between align-items-center'>
                            <h2>${e.name}</h2>
                            <button class='btn btn-${btn_class} py-1'>${e.rating} <i class='fa fa-star'></i></button>
                        </div>
                        <div class='d-flex align-items-center'>
                            <h3 class='text-secondary me-3'>Rs.${e.old_price}</h3>
                            <h3>Rs.${e.new_price}</h3>
                        </div>
                        <p>${e.description}</p>
                        <button class='btn btn-dark w-100' data-bs-target='#myModal'data-bs-toggle='modal' onclick='MyFun(${i+1})'>Add to cart</button>
                    </div>
                </div>
            </div>
            `;
})

row.innerHTML=card_data;

let cart_items_list=products.filter((e)=>{
    return e.added_cart>0;
})

cart_count.innerHTML=cart_items_list.length;
let myContent=`<table class="table table-striped border">
                <tr>
                    <th>S.No</th>
                    <th>Name</th>
                    <th>Image</th>
                    <th>Price</th>
                    <th>Action</th>
                </tr>`;
if(cart_count.innerHTML>0){
    let count=1;
    
    cart_items_list.map((e)=>{
        myContent+=`<tr>
                    <td>${count++}</td>
                    <td>${e.name}</td>
                    <td><img src="images/${e.img}.jpg" height="40px" alt=""></td>
                    <td>${e.new_price}</td>
                    <td><i class="fa fa-trash" data-bs-dismiss='modal' onclick='deleteFun(${e.img})'></i></td>
                </tr>`;
    })
   

    modal_Content.innerHTML=myContent;
    

}
else{
    modal_Content.innerHTML=` <center>
                <h2><i class="fa fa-face-sad-tear"></i></h2>
                <h3>No Cart Items</h3>
            </center>`
}



function deleteFun(e){
    let myContent=`<table class="table table-striped border">
                <tr>
                    <th>S.No</th>
                    <th>Name</th>
                    <th>Image</th>
                    <th>Price</th>
                    <th>Action</th>
                </tr>`;
    cart_items_list.map((data)=>{
        if(e==data.img){
            data.added_cart=0;
        }
    })    
    let count=1,num=0;

    cart_items_list.map((e)=>{
        
    })
    myContent+=`</table>`
    modal_Content.innerHTML=myContent;
    cart_count.innerHTML=num;
    

    if(num<=0){
        modal_Content.innerHTML=` <center>
                    <h2><i class="fa fa-face-sad-tear"></i></h2>
                    <h3>No Cart Items</h3>
                </center>`
    }


    console.log(cart_items_list);
}   