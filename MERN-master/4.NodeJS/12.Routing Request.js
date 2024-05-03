// Request routing can handle by using url property which is inside request object

const http = require('http');
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
        res.write('<h1>Form Submitted Successfully</h1>')
        return res.end()
     }     

})

server.listen(8000,()=>{
    console.log("Listening on port 8000")
})