const express = require('express')
const router = express.Router()


router.get('/all',(req,res)=>{
    console.log("All Students Data")
    res.send("Students Data")
})

router.post('/insert',(req,res)=>{
    console.log("Student Inserted Successfully")
    res.send("Students Inserted Successfully")
})

router.put('/update',(req,res)=>{
    console.log("Students Record Updated ")
    res.send("Students Record updated")
})

router.delete('/delete/:id',(req,res)=>{
    const {id} = req.params
    console.log(`Student Deleted with ID ${id}`)
    res.send(`Students Deleted, Id: ${id}`)
})


module.exports = router