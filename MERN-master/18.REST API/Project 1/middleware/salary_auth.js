
const authSalary = (req,res,next)=>{
    try{
        const {salary} = req.body;
        if(salary>=1000.00)
            next();
        else
        {
            res.json({status:"Error", msg:"Salary should greater than 1000"})
        }
    }
    catch(error)
    {
        res.json(error)
    }
}

module.exports = authSalary;