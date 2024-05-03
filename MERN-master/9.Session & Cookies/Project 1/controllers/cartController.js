
class cartController{
    static getCookie = (req,res)=>{
        console.log(req.cookies);
        res.send("Get Cookie")
    }

    static setCookie = (req,res)=>{
        res.cookie('username',"RK")
        res.cookie('product',{products:['bournvitta','cashew']})
        res.send("Set Cookie")
    }

    static deleteCookie = (req,res)=>{
        res.clearCookie('username')
        res.send("Delete Cookie")
    }
}

module.exports = cartController;