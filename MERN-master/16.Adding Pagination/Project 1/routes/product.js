const express = require('express')
const router = express.Router()
const productController = require('../controllers/productController');

///?page=1&limit=10
router.get('/api',productController.setData)
router.get('/getproducts',productController.getProducts)

module.exports = router;