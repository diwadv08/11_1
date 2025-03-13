// const events=require("events");
// const b=new events();
// b.on('a',()=>{
//     console.log('Welcome');
// });
// b.on('hi',()=>{
//     console.log('Hello');
// });
// b.emit('hi')
// b.emit('a')



// let events=require("events");
// let emitter=new events();
// let sum=(a,b,c)=>{
//     console.log(a+b+c);   
// }
// emitter.on('calc',sum)
// emitter.emit('calc',5,6,7)
// emitter.off('calc',sum)
// emitter.emit('calc',10,20,30)



const EventEmitter = require('events');
const emitter = new EventEmitter();
emitter.on('download', (a) => {
    console.log(`Downloading: ${a}`);
    setTimeout(() => {
        console.log(`${a} downloaded successfully!`);
    }, 3000);
});
emitter.emit('download', 'file.mp4');
setTimeout(() => {
    console.log(`Direct`);
}, 1000);
console.log('Starting download...');

// function Name(){
//     console.log('Function');
// }
// console.log('Hi');
// Name()