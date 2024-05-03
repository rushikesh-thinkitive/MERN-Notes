const http = require("http");

const server = http.createServer((req,res)=>{
    res.end("Listening from other side");
})


server.listen(8000,'127.0.0.1',()=>{
    console.log("listening to the port 8000");
})