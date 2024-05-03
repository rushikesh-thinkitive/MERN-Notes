/*

1) cookie parser is a middleware which parses cookies attached to the client request object
2) To get cookies on server - req.cookies
3) To use cookie parser - npm i cookie-parser
   const cookieParser = require('cookie-parser')

4) To use cookie it is mandatory to add -
   app.use(cookieParse())

5) To set cookie from web server -
   res.cookie()  -  It is used to set cookie name to value. The value parameter may be string or object converted to JSON.

   syntax - res.cookie(name,value)
   example -res.cookie("username","RK")
           -res.cookie("cart",{items:['dairymilk','cashew','nuts','bournvita']})

6) To clear cookie from web server:

   res.clearCookie(username)  // will remove cookie from client
                      // we need to specify name

7) By default, there is session cookie, cookie will save on client if user close the browser then it will 
   automatically removed from browser

8) If we want set the life span of cookie -
   res.cookie("username":"RK",{maxAge:10000})

   where, 10000 - miliseconds ( 10 seconds)
   after 10 second cookie will automatically destroy
   This cookie is called as Persistent Cookie

9) To clear cookies - 
   res.clearCookie('username')

10) Password kind of data should not store on cookie, It is not secure
11) Typically, the size of cookie can be 4KB, large data is not recommended to store in cookie
*/