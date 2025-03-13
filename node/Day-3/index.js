const fs=require("fs");
// const data=fs.readFileSync('1.html','utf8');
// console.log(data);
let read=fs.createReadStream('12.html','utf8');
read.on('data',(e)=>{
    console.log(e);
})
read.on('error',(e)=>{
    console.error(e.message);
})
// fs.writeFileSync('12.html','Hello World')
