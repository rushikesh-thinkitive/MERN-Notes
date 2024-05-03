const fetchData =  new Promise((resolve,reject)=>{
    try{
        setTimeout(()=>{
            resolve(
                {username:"RK",password:"rk@gmail.com"}
            )
        },2000)

    //   resolve(fetch("http://localhost:8000/store-api/product"))
    }
    catch(err)
    {
        reject(err);
    }
});

fetchData
.then(response=>{
    console.log(response);
})
.catch(err)
{
    console.log(err);
}