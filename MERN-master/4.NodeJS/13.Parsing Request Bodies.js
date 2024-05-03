// Parsing Request bodies - so here, we use on() method which automatically invoked when data comes in request object
/*
    in on() method we use 2 events - 1) data event - it invokes when data comes in request object but comes in chunks
    so we append that data into variable. but that data in query string
     
    2) end event - occurs when  getting complete data, and that we convert into object by using qs.parse(query object)

*/
const http = require('http');
const qs = require('querystring');

const server = http.createServer((req,res)=>{
     let form = `<h1>Registration</h1>
     <form method="post" action='/message'>
         <label for="name">Enter Name:</label><br>
         <input type="text" name="name" id="name"><br><br>
 
         <label for="email">Enter Email</label><br>
         <input type="email" name="email" id="name"><br><br>
 
         <input type="submit" value="Submit">
     </form>`;

     if(req.url==='/')
     {
         res.setHeader('Content-Type','text/html');
         res.statusCode = 200;
         res.write(form)
        return res.end();   // Because of return other statement will not execute
     }
     else if(req.url==='/message' && req.method === 'POST')
     {
        console.log("Hey we are in message")
        let body = []
        req.on('data',chunk=>{
            body.push(chunk)
        })
        req.on('end',()=>{
            const parseData = Buffer.concat(body).toString()
            console.log(qs.parse(parseData))
        })
        res.statusCode = 300;
        res.setHeader('Content-Type', 'text/html');
        res.write('<h1>Form Submitted Successfully</h1>')
        return res.end()
     }     
})

server.listen(8000,()=>{
    console.log("Listening on port 8000")
})