/*

1) Session is used to store text data on server
2) Session is used to store large data
3) In session, we can store sensitive data as well
4) To install session in express - npm i express-session
   const session = require('express-session');

5) To use session on server side - 
   app.use(session({
    secret :'iamkey',
    resave:false,
    saveInitialized:true,
    cookie:{path:'/',httpOnly:true,secure:false,maxAge:5000}
   }))

6)  name - The name of the session ID cookie to set in the response. The default value is "connect.sid".
    store - The session store instance, defaults to a new MemoryStore instance.

7) To store or access session data, simply use the request property - req.session
   which is generally serialized as JSON by the store, so nested objects are typically fine.
   
   Ex- we can make changes in session  
    req.session.count = 1

    console.log(req.session.count)       // used to access

8) req.session.destroy(callback) - It destroys the session and will unset the request.session property.
   once complete callback will be invoked

9) req.session.reload(callback) - reloads the session data from the store, once complete, the callback will be invoked.
10) req.session.id -    Each Session has a unique ID associated with it.
    This property is an alias of req.sessionID and cannot be modified.
    It has been added to make the session ID accessible from session Object.
    Session Id is read Only


11) We can store any information in session by - 
    req.session.username = "This is my stored Data"

*/