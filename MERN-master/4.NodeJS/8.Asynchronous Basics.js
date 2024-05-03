// Communications Basics

/* 1. Synchronous communication - Blocking in nature
                                  Task performed Sequecial manner
                                  Another task will get chance for execution when first task executed completely
*/

/* 2. Asynchronous communication -  Non Blocking in Nature
                                    Task performed Parallel 
                                    This is better way to increase performance of application

*/

// Ex 1:

// let waitingData = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Data")
//     },3000)
// });

// waitingData.then(data=>console.log(data)
// ).catch(error=>{
//     console.log(error)
// });



