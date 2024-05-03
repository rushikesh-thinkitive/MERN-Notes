// const data = {
//     name :"RK",
//     age :22,
//     salary : 450000
// }

// const JSONData = JSON.stringify(data);
// console.log(JSONData);




const JSONData = JSON.stringify({
    "name": "RK",
    "age": "22",
    "salary": "45000"
});

const obj = JSON.parse(JSONData);
console.log(obj)