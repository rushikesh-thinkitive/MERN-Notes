const express = require('express')
const router = express.Router()
const studentController = require('../controllers/studentController')

router.get('/register',studentController.get_Form)
router.post('/create',studentController.save_Form)
router.get('/login',studentController.loginForm)
router.post('/authenticate',studentController.authenticate)
router.get('/dashboard/:username',studentController.dashboard)

module.exports = router;