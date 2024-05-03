const axios = require('axios');

class productController{
    static getProduct = async (req,res)=>{
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts/1")
        res.send(res.json(response.data))
    }
}

module.exports = productController;