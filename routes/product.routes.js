const express = require('express')
const productController = require('../controller/product.controller')
const router = express.Router()

router.get('/:id', productController.findOne)

module.exports = router