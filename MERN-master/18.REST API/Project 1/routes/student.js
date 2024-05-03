const express = require('express');
const router = express.Router();
const authSalary = require('../middleware/salary_auth');
const studentController = require('../controllers/studentController');


router.get('/read/:rollno',studentController.readData)
router.get('/readbysalary',studentController.readDataBySalary)
router.post('/insert',authSalary,studentController.insertData)
router.post('/update',studentController.updateData)
router.delete('/delete/:rollno',studentController.deleteData)

module.exports = router;