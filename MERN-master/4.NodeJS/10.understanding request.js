// Understaning request in NodeJS -

/*

1) In nodeJS, when you create an HTTP server using the http module, we handle http incomming request by using request object
2) Request object represent HTTP request made by the client to server
3) It contains various properties and methods
4)

   Important properties -

   1) req.method  -  The HTTP method used by the client to know the request e.g (get,post,put,delete)
   2) req.url     -  The URL of the request, this includes the path, query parameter, and fragment identifier.
   3) req.headers -  An object containing the HTTP headers sent by the client as key-value pairs
   4) req.statusCode - The HTTP status message of the response sent by the server to the client.

*/

const http = require('http')
const server = http.createServer((req,res)=>{
    console.log("Headerrs:",req.headers)
    console.log("URL:",req.url)
    console.log(req.method)
    console.log(req.statusCode)
})

server.listen(8000);