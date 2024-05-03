const fs = require('fs');

fs.writeFileSync('demo.txt','This is the example for Synchronous programming');
console.log("After writing data into file");


fs.writeFile("async.txt",'This is Asynchronous File',
    (err)=>{
        if(err)
           console.log("Error while creating file",err);
        else
           console.log("File Created Successfully");
    })