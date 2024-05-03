const express = require('express')
const router = express.Router()


router.get('/all',(req,res)=>{
    console.log("All Teachers Data")
    res.send("Teachers Data")
})

router.post('/insert',(req,res)=>{
    console.log("Teacher Inserted Successfully")
    res.send("Teachers inserted ")
})

router.put('/update',(req,res)=>{
    console.log("Teachers Record Updated ")
    res.send("Teachers Updated")
})

router.delete('/delete',(req,res)=>{
    console.log("Teacher Deleted")
    res.send("Teachers Deleted")
})


module.exports = router