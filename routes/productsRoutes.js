const express = require('express');
const router = express.Router();

const { copyFile } = require('fs');
const productsController = require('../controllers/productsController')

/**Products routes */

router.get('/', productsController.getAllProducts)

router.get('/:id',productsController.getProduct)


module.exports = router;
