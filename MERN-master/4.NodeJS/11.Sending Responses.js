/*
1) In nodeJS, response object is an instance of the http.SrverResponse class representing HTTP response that server
   sends to the client
2) 
    attributes of response object -

    1.res.statusCode  -  The HTTP status code of the response ( 200 for ok, 404 for Not Found etc.)
    2.res.statusMessage - The status message corresponding to the status code ( eg.ok for status code - 200)
    3.res.writable      - A boolean indicating whether the response is still writable. It becomes false after res.end() is called
    4.res.setHeader()   - This method is used to set an HTTP header in the response.
                          This method allows you to define custom headers overwrite the header before sending to client

*/


const http = require('http');
const server = http.createServer((req,res)=>{
    res.statusCode = 200;
    res.statusMessage = "Data Send Successfully";
    res.setHeader('Content-Type','text/html');
    res.write("<h1>First Advanced Response</h1>")
    res.end()
})


server.listen(8000,()=>{
    console.log("Listening on port 8000")
})