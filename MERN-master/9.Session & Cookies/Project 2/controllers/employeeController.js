class employeeController{
    static get_session = (req,res)=>{
        console.log("Get Session",req.session)
        console.log("Username:",req.session.username)
        res.send("Get Session")
    }

    static set_session = (req,res)=>{
        console.log("Set Session")
        req.session.username = "RK";
        res.send("Set Session")
    }

    static delete_session = (req,res)=>{
        res.send("Session Deleted")
        req.session.destroy(()=>{
            console.log("Session Deleted ")
        })
    }
}

module.exports = employeeController;