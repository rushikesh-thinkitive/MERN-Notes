/*

1) To import js module, we use require() method
   Ex:  const demo = require('./Demo');   OR
        const demo = require('./Demo.js');

2) but whatever module we are importing that must export from particular file
   Ex:  
          Demo.js

          moduel.exports = {
            a: 10,
            b: 20
          }

*/ 

const demo = require('./Demo');
console.log(demo)