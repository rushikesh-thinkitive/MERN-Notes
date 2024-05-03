const http = require('http');


const server = http.createServer((req,res)=>{
    console.log(req.url);
    if(req.url == '/contactus')
        res.end("This is Contact Us page");
    else
        res.end("Listening from the other side");
})

server.listen(8000,'127.0.0.1',()=>{
    console.log("Listening to the port 8000");
})