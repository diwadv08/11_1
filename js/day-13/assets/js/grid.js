const link=document.createElement("link");
link.setAttribute("rel","stylesheet");
link.setAttribute("href","assets/css/style.css");


const container=document.createElement("div");
const row=document.createElement("div");
const col_4_1=document.createElement("div");
const col_4_2=document.createElement("div");
const col_4_3=document.createElement("div");
const card_1=document.createElement("div");
const card_2=document.createElement("div");
const card_3=document.createElement("div");
const h1_1=document.createElement("h1");
const h1_2=document.createElement("h1");
const h1_3=document.createElement("h1");


container.setAttribute('class',"container");
row.setAttribute('class',"row");
col_4_1.setAttribute('class',"col-4");
col_4_2.setAttribute('class',"col-4");
col_4_3.setAttribute('class',"col-4");
card_1.setAttribute('class',"card");
card_2.setAttribute('class',"card");
card_3.setAttribute('class',"card");
h1_1.innerHTML="Hello-1";
h1_2.innerHTML="Hello-2";
h1_3.innerHTML="Hello-3";



container.appendChild(row);
row.appendChild(col_4_1);
row.appendChild(col_4_2);
row.appendChild(col_4_3);
col_4_1.appendChild(card_1);
col_4_2.appendChild(card_2);
col_4_3.appendChild(card_3);
card_1.appendChild(h1_1)
card_2.appendChild(h1_2)
card_3.appendChild(h1_3)





document.body.appendChild(container)
document.head.appendChild(link)