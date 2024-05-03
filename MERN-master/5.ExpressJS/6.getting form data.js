/*


const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:false})) 


1) body-parser is a middleware
2) This line tells to expressJS that parse incoming requests with URL-encoded & set the extended option false
   which means that URL encoded data will convert into query string by querystring module
3) Just because of this statement form data from client side travels into the backend



*/