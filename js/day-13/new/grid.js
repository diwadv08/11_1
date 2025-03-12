let container_fluid=document.createElement("div");
let container=document.createElement("div");
let row=document.createElement("div");
let col_1=document.createElement("div");
let col_2=document.createElement("div");
let col_3=document.createElement("div");
let col_4=document.createElement("div");
let card_1=document.createElement("div");
let card_2=document.createElement("div");
let card_3=document.createElement("div");
let card_4=document.createElement("div");
let h1_1=document.createElement("h1");
let h1_2=document.createElement("h1");
let h1_3=document.createElement("h1");
let h1_4=document.createElement("h1");

container_fluid.setAttribute('class','container-fluid');
container.setAttribute('class','container');
row.setAttribute('class','row text-center');
col_1.setAttribute('class','col-3');
col_2.setAttribute('class','col-3');
col_3.setAttribute('class','col-3');
col_4.setAttribute('class','col-3');

card_1.setAttribute('class','card');
card_2.setAttribute('class','card');
card_3.setAttribute('class','card');
card_4.setAttribute('class','card');

h1_1.innerHTML='Hello-1';
h1_2.innerHTML='Hello-2';
h1_3.innerHTML='Hello-3';
h1_4.innerHTML='Hello-4';



container_fluid.appendChild(container)
container.appendChild(row)
row.appendChild(col_4)
row.appendChild(col_1)
row.appendChild(col_2)
row.appendChild(col_3)

col_2.appendChild(card_2)
col_3.appendChild(card_3)
col_4.appendChild(card_4)
col_1.appendChild(card_1)

card_1.appendChild(h1_1)
card_2.appendChild(h1_2)
card_3.appendChild(h1_3)
card_4.appendChild(h1_4)
document.body.appendChild(container_fluid);