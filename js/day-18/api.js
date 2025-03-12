let url=fetch('https://jsonplaceholder.typicode.com/users');
url.then((url)=>{
    return url.json();
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
})
.finally((e)=>{
    console.log('hello');
})


// const Api=async()=>{
//     let url=await fetch('https://jsonplaceholder.typicode.com/albums');
//     console.log(await url.json());
// }
// Api()