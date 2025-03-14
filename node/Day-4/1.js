const http=require("http");
const querystring=require("querystring");
http.createServer((req,res)=>{
    if(req.url==="/welcome" && req.method==="POST"){
        let datas="";
        req
        .on('data',(w)=>{
            datas+=w;    
        })
        .on('end',()=>{
            let obj=querystring.parse(datas)
            res.end(JSON.stringify(obj))
        })
    }
}).listen(9000)