const http = require('http')
const qs = require('querystring')

const server = http.createServer((req,res)=>{
    let url = req.url;
    let method = req.method;
    if(url==='/')
    {
        let form = `<h1>Registration</h1>
        <form method="post" action='/message'>
            <label for="name">Enter Name:</label><br>
            <input type="text" name="name" id="name"><br><br>
    
            <label for="email">Enter Email</label><br>
            <input type="email" name="email" id="name"><br><br>
    
            <input type="submit" value="Submit">
        </form>`;
        res.statusCode = 200;
        res.statusMessage = "Form Sent Successfully"
        res.write(form)
        res.end();
    }
    else if(url==='/message' && method==="POST")
    {
        let body = []
        res.statusCode = 300;
        res.statusMessage = "Form Submitted Successfully"
        req.on('data',chunk=>{
            body.push(chunk)
        })
        req.on('end',()=>{
            let data = Buffer.concat(body).toString()
            console.log(qs.parse(data));
        })
        res.write("<h1>Form Submitted Successfully</h1>")
        res.end();
    }
})

server.listen(8000,()=>{
    console.log("Listening on port 8000")
})