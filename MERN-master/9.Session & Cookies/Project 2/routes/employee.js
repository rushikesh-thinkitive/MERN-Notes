const express = require('express')
const employeeController = require('../controllers/employeeController')
const router = express.Router()

router.get('/getsession',employeeController.get_session)
router.get('/setsession',employeeController.set_session)
router.get('/deletesession',employeeController.delete_session)


module.exports = router;