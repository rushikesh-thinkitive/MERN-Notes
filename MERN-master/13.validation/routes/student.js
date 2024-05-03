const express = require('express')
const router = express.Router()
const studentController = require('../controllers/studentController')
const emailAuth = require("../middlewares/email-auth")

router.get('/register',studentController.get_Form)
router.post('/create',emailAuth,studentController.save_Form)
router.get('/login',studentController.loginForm)
router.post('/authenticate',studentController.authenticate)
router.get('/dashboard/:username',studentController.dashboard)
router.get('/reset-form',studentController.resetPasswordForm)
router.post('/send-reset-mail',studentController.sendStudentResetPasswordEmail)
router.get('/reset/:id/:token',studentController.resetConfirmPasswordForm)
router.get('/reset-confirm-password-form',studentController.resetConfirmPasswordForm)
router.post('/user-password-reset/:id/:token',studentController.userPasswordReset)


module.exports = router;