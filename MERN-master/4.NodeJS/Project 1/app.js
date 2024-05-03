const http = require('http')
const handleRoute = require('./routes')

console.log(handleRoute)

const server = http.createServer(handleRoute)

server.listen(8000,()=>{
    console.log("Listening on port 8000")
})