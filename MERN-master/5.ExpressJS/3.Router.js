/*

1) Router class is used to create route handlers
2) A Router instance is a complete middleware and routing system
3) Every Express application has a built-in app router
4) Steps - Here, we need to create routes dir
   routes/student.js
   routes/teacher.js

5) student.js -

    const router = express.Router()

    router.get('/student/all',(req,res)=>{
        res.send("All Student");
    })

    router.post('/student/create',(req,res)=>{
        res.send("New Student Created")
    })

    router.put('/student/update',(req,res)=>{
        res.send("Student Updated")
    })

    router.delete('/student/delete',(req,res)=>{
        res.send("Student Deleted")
    })

    module.exports = router
    

6) problem - we prefix every route with student
   
   so we can skip repeated part and we can write it once in app.js while importing route 

   student.js

   const router = express.Router()

    router.get('/all',(req,res)=>{
        res.send("All Student");
    })

    router.post('/create',(req,res)=>{
        res.send("New Student Created")
    })

    router.put('/update',(req,res)=>{
        res.send("Student Updated")
    })

    router.delete('/delete',(req,res)=>{
        res.send("Student Deleted")
    })

    module.exports = router
    


    app.js

    const student = require('./students')
    const teacher = require('./teachers')

    app.use('/student',student)
    app.use('/teacher',teacher)


*/