let div=document.querySelector("div");
let input=document.querySelector("input");
const table_datas=[
    {
        s_no:"1",
        name:"Hari",
        age:"12",
        pwd:"123$",
        email:"hari@gmail.com"
    },
    {
        s_no:"2",
        name:"Varun",
        age:"22",
        pwd:"456$",
        email:"varun@gmail.com"
    },
    {
        s_no:"3",
        name:"Ashwin",
        age:"10",
        pwd:"789$",
        email:"ashwin@gmail.com"
    },
    
];


function default2(){
    let table_headings=Object.keys(table_datas[0]);
    table_headings.unshift('id');
    let main_table="<table cellpadding='10' border='1'><tr>";
    table_headings.map((e)=>{
        main_table+=`<th>${e}</th>`
    })
    let num=1;
    main_table+="</tr>";
    table_datas.map((e)=>{
    main_table+=
    `<tr>
            <td>${num++}.</td>
            <td>${e.s_no}</td>
            <td>${e.name}</td>
            <td>${e.age}</td>
            <td>${e.pwd}</td>
            <td>${e.email}</td>
        </tr>`
        
    })
    div.innerHTML=main_table;
}



function filters(e){
   let myInput=e.target.value;
   const result=table_datas.filter((e)=>{
        return e.name.toLowerCase().startsWith(myInput.toLowerCase()) || e.email.toLowerCase().startsWith(myInput.toLowerCase())  || e.pwd.toLowerCase().startsWith(myInput.toLowerCase()) || e.s_no.toLowerCase().startsWith(myInput.toLowerCase())||e.age.toLowerCase().startsWith(myInput.toLowerCase());
   });

   let headings=Object.keys(table_datas[0]);
   headings.unshift('id');
   let num=1;
   let main_table="<table cellpadding='10' border='1'><tr>";
   headings.map((e)=>{
    main_table+=`<th>${e}</th>`
   })
   main_table+="</tr>";
   result.map((e)=>{
    main_table+=`
        <tr>
            <td>${num++}</td>
            <td>${e.s_no}</td>
            <td>${e.name}</td>
            <td>${e.age}</td>
            <td>${e.pwd}</td>
            <td>${e.email}</td>
        </tr>
    `
   })
   if(result.length>0){
    div.innerHTML=main_table;
   }
   else{
    div.innerHTML='<center>No matching results for '+myInput+'</center>';
   }
}

window.addEventListener('load',default2);
input.addEventListener('keyup',filters)

