const fs = require('fs');
const data = {
    name:"RK",
    age: 22,
    salary: 450000
};

// 1.convert obj to JSON

// const JSONdata = JSON.stringify(data);

// 2.add JSON into file

// fs.writeFile('data.json',JSONdata,(err)=>{
//     if(err)
//        console.log("Error:",err);
//     else
//        console.log("JSON data Added Successfully");
// })

// 3.Read JSON data from file


fs.readFile('data.json','utf8',(err,data)=>{
    if(err)
        console.log("Error:",err);
    
    const fileData=JSON.parse(data);  
    console.log("Inside:",fileData) 
})


