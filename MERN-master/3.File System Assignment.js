const fs = require('fs');

//1. creating file and adding data into it
fs.writeFileSync('bio.txt','Hey, Welcome to NodeJS, This is JS first Assignment');

//2. append data
fs.appendFileSync('bio.txt',"\nLet's Fun with NodeJS");

//3. Read data
let data = fs.readFileSync('bio.txt','utf8');
console.log(data);

//4. Rename file
fs.renameSync('bio.txt','Mybio.txt');

//5. delete file
// fs.unlinkSync('Mybio.txt');

//6 creating dir
// fs.mkdirSync('Dir');