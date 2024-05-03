const fs = require('fs')

let data = "Hey, Welcome to NodeJS, Let's fun with NodeJS";
fs.writeFileSync('3.Tempfile.txt',data);
fs.appendFileSync('3.Tempfile.txt',"\nThis is appended data");