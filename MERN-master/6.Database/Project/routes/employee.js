const express = require('express');
const router = express.Router()
const Employee = require('./../models/employee')

router.get('/addEmployee',(req,res)=>{
    let form = `<h1>Registration Of Employee</h1>
    <form method="post" action='/employee/create'>
    <label for="empid">Enter EmpId:</label><br>
    <input type="number" name="empid" id="empid"><br><br>

    <label for="name">Enter Name:</label><br>
    <input type="text" name="name" id="name"><br><br>
    
    <label for="salary">Enter Salary</label><br>
    <input type="number" name="salary" id=salary"><br><br>
    
    <input type="submit" value="Submit">
    
    </form>
    <button><a style="text-decoration:none; color:black;" href='/employee/all/'>Read Employee</a></button>`;
    res.send(form);

})

router.get('/all',async (req,res)=>{
    const data = await Employee.findAll()
    res.send(data);
})

router.post('/create',async (req,res)=>{
    const formData = req.body
    console.log("FormData:",formData);
    try {
        const { empid:id,name:Name,salary:Salary } = formData

        // Create a new task using Sequelize model
        const task = await Employee.create(
            {
                empid: id,
                name: Name,
                salary: Salary
            },
        res.send("New employee Created")
    )    
    } catch (error) {
        // If an error occurs, send an error response
        res.status(500).json({ error: error.message });
    }

    
})

router.put('/update/:id',async (req,res)=>{
    const empid = req.params.id;
    try {
        // Find the employee by ID
        let employee = await Employee.findByPk(empid);

        // If employee not found, return 404 Not Found
        if (!employee) {
            return res.status(404).json({ error: 'Employee not found' });
        }

        // Update the employee's attributes
        employee.empid = 516;
        employee.name = "Kailash";
        employee.salary = 70000;

        // Save the updated employee
        await employee.save();

        // Send success response
        res.status(200).json({ message: 'Employee updated successfully' });
    } catch (error) {
        // If an error occurs, send an error response
        res.status(500).json({ error: error.message });
    }

})

router.delete('/delete/:id',async (req,res)=>{
    console.log("Deleting")
    const empid = req.params.id;
    try {
          Employee.destroy({where:{id:empid}})
          res.status(200).json({ message: 'Employee deleted successfully' });
    } catch (error) {
        // If an error occurs, send an error response
        res.status(500).json({ error: error.message });
    }
})

module.exports = router