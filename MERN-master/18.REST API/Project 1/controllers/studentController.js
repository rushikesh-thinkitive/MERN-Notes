const { json } = require('body-parser');
const Student = require('../model/studentModel');

class studentController{

    static readData = async (req,res)=>{
        const {rollno:roll} = req.params;
        // console.log("rollno")\
        // const data = await Student.find({rollno:roll});
        const data = await Student.find({
            name: {"$regex":'^[A-Z]'},
            salary: {"$gte":10000,"$lte":40000},
            rollno: {"$gte":3}
        })

        res.status(201).json({
            status:"data Fetched Successfully",
            data:data,        
        })
    }

    static insertData = async (req,res)=>{
        try{
            const data = req.body
            // console.log(data)
            const studentDoc = Student( data );
            studentDoc.save()
            .then(response=>{
                res.json({status:"Data saved Successfully"})
            })
        }
        catch(err)
        {
            res.json(err);
        }
    }

    static updateData = async (req,res)=>{
        try{
            console.log("Inside update doc")
            const jsonData = req.body
            const stu_rollno = jsonData.stu_rollno;
            console.log(stu_rollno)
            delete jsonData.stu_rollno;
            // console.log(jsonData);
            const updatedDoc = await Student.findOneAndUpdate({rollno:stu_rollno},jsonData,{new:true})           // {new:true} -> return updated document
            res.json({status:"Student Updated Successfully",updatedDoc:updatedDoc})
        }
        catch(err)
        {
            res.json(err)
        }
    }

    static deleteData = async (req,res)=>{
        try{
            const {rollno} = req.params;
            const response = await Student.findOneAndDelete({rollno:rollno},{next:true})
            res.json({status:"Deleted Successfully",data:response})
        }
        catch(err)
        {
            res.json(err);
        }
    }

    static readDataBySalary = async (req,res)=>{
        const data = await Student.aggregate([
            { $group: { _id: "$salary", names: { $push: "$name" } } },
            { $match: { _id: { $ne: null } } } // Exclude documents where salary is null
          ]);
        
          

        res.status(201).json({
            status:"data Fetched Successfully",
            data:data,        
        })
    }
}

module.exports = studentController;


