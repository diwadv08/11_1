// const url=fetch('https://jsonplaceholder.typicode.com/posts');
// url.then((e)=>{
//     return(e.json());
// }).then((e)=>{
//     console.log(e);
// })

// const input=document.querySelector("#searchBox");
const row=document.querySelector(".row");
// async function Api(){
//     const url=await fetch('https://jsonplaceholder.typicode.com/posts');
//     let table_data=await url.json();
//     let card_data='';
//     table_data.map((e)=>{
        
        
//         card_data+=`
//         <div class='col-lg-4 col-md-6 my-2'>
//             <div class='card'>
//                 <div class='card-body'>
//                     <h2>${e.id}</h2>
//                     <h4>${e.title}</h4>
//                     <p>${e.body}</p>
//                 </div>
//             </div>
//         </div>
//         `
//     })

//     row.innerHTML=card_data;
// }

// async function Filter(e){
//     let MyInput=e.target.value;
    
//     const url=await fetch('https://jsonplaceholder.typicode.com/posts');
//     let table_data=await url.json();
//     let card_data='';
//     const result_data=table_data.filter((a)=>{
//         return a.title.startsWith(MyInput) ||  a.body.startsWith(MyInput) ||  a.id===Number(MyInput);
//     })
//     if(result_data.length>0){
//         result_data.map((e)=>{
//             card_data+=`
//             <div class='col-lg-4 col-md-6 my-2'>
//                 <div class='card'>
//                     <div class='card-body'>
//                         <h2>${e.id}</h2>
//                         <h4>${e.title}</h4>
//                         <p>${e.body}</p>
//                     </div>
//                 </div>
//             </div>
//             `
//         })
//         row.innerHTML=card_data;
//     }
//     else{
//         row.innerHTML="No results for-"+MyInput;
//     }

// }





const myData=[
    {
        name:"Fru",
    },
    {
        name:"kjdfn",
    },
    {
        name:"kjdfn",
    },
    {
        name:"kjdfn",
    },
    {
        name:"kjdfn",
    },
    {
        name:"kjdfn",
    },
    {
        name:"kjdfn",
    },
    {
        name:"kjdfn",
    },
    {
        name:"kjdfn",
    },
    {
        name:"kjdfn",
    },
    {
        name:"kjdfn",
    },
    {
        name:"kjdfn",
    },
    {
        name:"kjdfn",
    },
    {
        name:"kjdfn",
    },
    {
        name:"kjdfn",
    },
    {
        name:"kjdfn",
    }
]
let card_data='';
myData.map((e,i)=>{
    card_data+=`
            <div class='col-lg-4 col-md-6 my-2'>
                <div class='card'>
                <img src='images/${i}.jpg'>
                    <div class='card-body'>
                        <h2>${i+1}</h2>
                        <h2>${e.name}</h2>
                        <button class='btn btn-danger w-100' data-bs-target='#myModal'data-bs-toggle='modal' onclick='MyFun(${i+1})'>Add to cart</button>
                    </div>
                </div>
            </div>
            `
})

row.innerHTML=card_data


// input.addEventListener('keyup',Filter)
// window.addEventListener('load',Api)

function MyFun(e){
    let modal_Content=document.querySelector(".modal-content");
    modal_Content.innerHTML+='<h1>'+e+'</h1>';
}
