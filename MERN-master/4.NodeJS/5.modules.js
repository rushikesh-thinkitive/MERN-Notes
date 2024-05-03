/*

1) In Js, there are 3 kinds of modules - 1) core modules 2) Third party modules   2) global modules
2) NodeJS, provide us basic modules like connecting with DB, processing files, calling API, those are called non-global modules
   Because, It is already defined in our language but need to import
   There are some modules, fs - file system, http - for API calling 
3) Third Party Modules - Which we need to install externally.
                         To use them in our file, we need to import them and then we can use.

   Global Modules -  which is already exist in our javascript.
                     we don't need to import them before use.
         Ex: console, windows

   core modules - which is by default exist in enviornment
                  But before use we need to import them in js file
            Ex: fs,http
4) Important varibles -

   __dirname -> gives current dir name
   __filename -> gives current file name

*/

console.log(__dirname);
console.log(__filename);