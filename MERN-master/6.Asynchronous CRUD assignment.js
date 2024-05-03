// Asynchronous Assignment

const fs = require('fs');

// create Folder

// fs.mkdir('Ass6',(err)=>{
//     if(err)
//       console.log("Error:",err);
//     else
//       console.log("Folder Created Successfully");
// })


// creating file

// fs.writeFile('bio.txt',"Doing Fun with NodeJS",
//     (err)=>{
//         if(err)
//            console.log("Error:",err);
//         else
//            console.log("File Created Successfully");
// });


// Append Data 

// fs.appendFile('bio.txt',"\nAppending Data is Easy",
//     (err)=>{
//         if(err)
//            console.log(err);
//         else
//            console.log("Data Append Successfully");
//     }
// )


// Reading Data

// fs.readFile('bio.txt','UTF-8',
//     (err,data)=>{
//         if(err)
//            console.log("Error While Reading Data: ",err);
//         else
//            console.log("Data:",data)
//     }
// )


// Rename File

// fs.rename('bio.txt','MyBio.txt',
// (err)=>{
//     if(err)
//        console.log("Error: ",err);
//     else
//        console.log("Rename Successfully");
// });


// deleting

fs.unlink('MyBio.txt',(err)=>{
    if(err)
       console.log("Error: ",err);
    else
       console.log("Delete Successfully");
})