const qs = require('querystring')

const handleRoutes = (req,res)=>{
    const url = req.url
    const method = req.method

    if(url === '/')
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
        res.statusMessage = "Form Display Successfully";
        res.write(form)
        res.end()
    }
    else if(url==='/message' && method==="POST")
    {
        let body = [];
        req.on('data',chunk=>{
            body.push(chunk);
        })
        req.on('end',()=>{
            let queryString = Buffer.concat(body).toString()
            // console.log(queryString)
            res.statusCode = 303
            let data = qs.parse(queryString);
            res.statusMessage = "Form Data Processed Successfully";
            res.write("<h1>Form Data Submitted Successfully</h1>");
            res.write(`<p>Name:${data.name}</p>`)
            res.write(`<p>Email:${data.email}</p>`)

            res.end()
        })
    }
}


module.exports = handleRoutes;