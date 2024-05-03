/*

1) Routing is a process in which application responds to the client requests
2) for different method here are different method ( get,method,put,delete)
3) Each route has one or more callback functions, those will execute when route matched.
   Ex:  app.method(path,callback)
    >>  app.method('/',[fun1,fun2,fun3]);  OR
    >>  app.method('/',[fun1,fun2],fun3);


    where, app ->  instance of express
           method -> HTTP request method in lowercase
           path -> path on server
           callbacks -> lines of code which should execute when route matches

4) app.get(path,callback)   -> To handle get request
   Ex:  app.get('/',(req,res)=>{
          console.log("Returning Home Page");
   })

5) app.post(path,callback)  -> To handle post request

6) methods :-
   GET - Retrieve Data
   POST - Insert data
   PUT - completely update data
   PATCH - Partially update data
   DELETE - delete data
   all - Any HTTP request can handle


Ex:  app.get('/student/all',(req,res)=>{
    res.send("All Student");
})

  Callback :- In callback, we use 3 arguments - 
  1) req - Request Object
  2) res - Response Object
  3) next - It is indicating the next middleware function
     If we are calling multiple callbacks in API so after first callback second callback should execute for that we call 
     next()

  Ex: const cb1 = (req,res,next)=>{
    console.log("Callback 1")
    next()
  }

  const cb2 = (req,res,next)=>{
    console.log("Callback 2")
    next()
  }

  const cb3 = (req,res,next)=>{
    console.log("Callback 3");
  }

  app.get('/cbexample',[cb1,cb2,cb3])

  we use next() in callbacks just because callback can execute one by one

7) when we define all routing in one file so code becomes messy to read and understand
   For that we can use Router 
   For every entity(student,teacher) we will create separate Module to distinct every entity route



*/