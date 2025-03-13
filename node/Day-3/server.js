const http=require('http');
let path=["/","/home","/about","/contact"];
let portNumber=9000;
const server=http.createServer((req,res)=>{
    if(req.url==path[0]){
        let a= res.end(`<div>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
        </div>
        <h1>Home</h1>`);
        a.on('error',(e)=>{
            console.log(e.message);
        })
    }
    else if(req.url==path[1]){
        res.write(`<div>
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                    <a href="/contact">Contact</a>
                </div>
                <h1>Home</h1>`);
        res.end();
    }
    else if(req.url==path[2]){
        res.write(`<div>
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                    <a href="/contact">Contact</a>
                </div>
                <h1>About</h1>`);
        res.end();
    }
    else if(req.url==path[3] && req.method=='GET'){
        res.write(`<div>
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                    <a href="/contact">Contact</a>
                </div>
                <h1>Contact</h1>
                <form action="/contact" method="post">
                    <input type="text">
                    <input type="submit">
                </form>`);
        res.end();
    }
    else if(req.url==path[3] && req.method=='POST'){
        res.write(`<div>
                    <a href="/">Go to Home</a>
                </div>
                <h1>Form Submitted Successfully</h1>`);
        res.end();
    }
   
    else{
        res.writeHead(404,{
            "content-type":"text/html"
        })
        res.write('<h1>Error</h1> http://localhost:'+portNumber+req.url);
        res.end();
    }
})



server.listen(portNumber)