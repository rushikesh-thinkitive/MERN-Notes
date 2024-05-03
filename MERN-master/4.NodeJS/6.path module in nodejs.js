/*

1) path module in nodejs provides methods to work with file and directory paths
2) It helps to resolve the path

*/

const path = require('path')
const fs = require('fs')
const dirPath = path.join(__dirname,'CRUD')
const filePath = `${dirPath}/File.txt`;

fs.writeFileSync(filePath,'This is a simple text file')