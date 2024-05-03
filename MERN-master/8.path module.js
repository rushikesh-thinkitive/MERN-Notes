// 1) path is module in nodejs
// 2) path module provides utilities for working related to file and directory path


const path = require('path');
// console.log(path.join('/foo', 'bar', 'baz/asdf', 'quux'));      // join path by set of strings

// console.log(path.basename('/foo/bar/baz.txt'))          // returns baz.txt

// console.log(path.dirname('/foo/bar/baz.txt'))       // returns dir -> /foo/bar

// console.log(path.extname('/foo/bar/baz.txt'))       // returns extension -> .txt

