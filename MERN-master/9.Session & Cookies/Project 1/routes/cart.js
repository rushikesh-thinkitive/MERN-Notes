const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');

router.get("/getcookie",cartController.getCookie)
router.get('/setcookie',cartController.setCookie)
router.get('/deletecookie',cartController.deleteCookie)


module.exports = router;