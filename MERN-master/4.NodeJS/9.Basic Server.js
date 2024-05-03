//Note: At backend, starting point of nodejs is server.js/app.js where server is created
// server.js is capable to give response

// Creating Basic Server

/*
1) To create basic server in nodeJS, we use http module
2) To make communication between request and response, we use http module
3) In http module, there is createServer() method used to create an HTTP server
4) http.createServer() returns instance of http.Server
5 createServer() takes callback as argument, 
   createServer((req,res)=>{
       // here, 
       // by using req, we can access route for which client request
       // by using res, we can give response back to the user
   })

4) listen(portNo) - to execute application on specified port no


*/

// Ex


const http = require('http')
http.createServer((req,res)=>{
   res.write("We are visiting Backend First Time")
   console.log(req.url)
   res.end();
}).listen(8000)



// Explaination - 
/*

1) http.createServer() : creates an HTTP Server return instance of http.Server
2) The arrow function passed to createServer() is called every time the server receives a request.  
3) This arrow function takes 2 arg, req and res
4) res.writeHead() set's the response Headers
5) res.end() sends the response body
6) server.listen() - starts the server and listens on the specified port and hostname.

Note : According to the Standard, server file name should be - app.js or server.js
*/