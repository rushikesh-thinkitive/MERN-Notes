// ASynchronous File System method



const fs = require('fs');
const path = require('path')
const dirPath = path.join(__dirname,'CRUD')
const filePath = `${dirPath}/File.txt`

// 1) Reading File

// fs.readFile(filePath,'utf-8',(err,data)=>{
//     if(err)
//     {
//         console.log("Error While Reading File:",err);
//     }
//     else{
//         console.log("Data:",data);
//     }
// })


// 2. Write data into File

// fs.writeFile(filePath,"This is New Content added into file",(err)=>{
//     if(err){
//         console.log("Error While Reading File:",err);
//     }
// })


// 3. Append data into File

// fs.appendFile(filePath,"\nThis is appended data into the file",(err)=>{
//     if(err){
//         console.log("Reading File while Appending data:",err)
//     }
// })


// 4. Renaming the file

// fs.rename(filePath,`${dirPath}/NewFile.txt`,(err)=>{
//     if(!err)
//     {
//         console.log("File Renamed Successfully");
//     }
// })


// 5. Delete File

// fs.unlink(`${dirPath}/NewFile.txt`,(err)=>{
//     if(!err){
//         console.log("File Deleted Successfully")
//     }
// })