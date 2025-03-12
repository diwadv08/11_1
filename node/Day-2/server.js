const http=require("http");
const server=http.createServer((req,res)=>{
    if(req.url=='/'){
        res.end(`<div>
                    <a href="/home">Home</a>
                    <a href="/about">About</a>
                    <a href="/contact">Contact</a>
                </div>
                <h1>Home</h1>`);
    }
    else if(req.url=='/home'){
        res.end(`<div>
                    <a href="/home">Home</a>
                    <a href="/about">About</a>
                    <a href="/contact">Contact</a>
                </div>
                <h1>Home</h1>`);
    }
    else if(req.url=='/about'){
        res.end(`<div>
                    <a href="/home">Home</a>
                    <a href="/about">About</a>
                    <a href="/contact">Contact</a>
                </div>
                <h1>About</h1>`);
    }
    else if(req.url=='/contact' && req.method=='GET'){
        res.end(`<div>
                    <a href="/home">Home</a>
                    <a href="/about">About</a>
                    <a href="/contact">Contact</a>
                </div>
                <h1>Contact</h1>
                <form action="/contact" method='POST'>
                    <input type="text">
                    <input type="submit">
                </form>
                `);
    }
    else if(req.url=='/contact' && req.method=='POST'){
        res.end(`<a href='/contact'>Contact</a><h1>Submitted</h1>`)
    }
    else{
        res
        .writeHead(404,{
            "content-type":"text/html"
        })
        .end('<h1>No page found</h1>');
    }
});
server.listen(8080)
