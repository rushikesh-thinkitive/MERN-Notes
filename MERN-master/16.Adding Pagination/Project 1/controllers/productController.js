const fetchData = require('../services/1.fetchproductdata')

class moviesController{
   static setData =async (req,res)=>{
        const {page,limit} = req.query;
        console.log(page,limit);
        const offset = (page-1)*limit;
        const products =[]
        for(let id = offset;id<=offset+5;id++)
        {
            const data = await fetchData(`https://dummyjson.com/products/${id}`)
            products.push(data);
            // console.log("Data:",data)
        }
       
      

        const htmlPage = `
         <div>
            <h1>Page : ${page} Data</h1>
         </div>
        `
        res.send(products)
   }
   
   static getProducts = (req,res)=>{
      let paginations = `
         <a href="http://localhost:3000/products/api/?page=1&limit=5">1</a>
         <a href="http://localhost:3000/products/api/?page=2&limit=5">2</a>
         <a href="http://localhost:3000/products/api/?page=3&limit=5">3</a>
         <a href="http://localhost:3000/products/api/?page=4&limit=5">4</a>
         <a href="http://localhost:3000/products/api/?page=5&limit=5">5</a>
         <a href="http://localhost:3000/products/api/?page=6&limit=5">6</a>
         <a href="http://localhost:3000/products/api/?page=7&limit=5">7</a>
         <a href="http://localhost:3000/products/api/?page=8&limit=5">8</a>
         <a href="http://localhost:3000/products/api/?page=9&limit=5">9</a>
         <a href="http://localhost:3000/products/api/?page=10&limit=5">10</a>
      `;
      res.send(paginations);
   }


}


module.exports = moviesController;