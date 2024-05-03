const express = require('express');
const router = express.Router()
const productController = require('../controllers/productControllers')


router.get('/getproduct',productController.getProduct)

module.exports =router;