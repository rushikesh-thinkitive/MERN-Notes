// In asynchronous File System, this operation is non-blocking, means this process execute independent of other processes.

const fs = require('fs');
fs.writeFile("Temp.txt","Let's welcome to the JS world",
     (err)=>{
        if(err)
           console.log("Error:",err);
        else
           console.log("File Created Successfully");
     });