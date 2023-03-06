const express = require('express');
const router = express.Router();
// const { check, validationResults } = require('express-validator');
const { copyFile } = require('fs');

const Product = require('../models/Product');
const Providers = require('../models/Providers');

router.get('/', async (req, res) => {
    try {
        const products = await Product.find({}).populate({path: 'provider', Model: Providers });
        res.json(products);
    } catch (err) {
        console.error(err.message);
        req.statusCode(500).send('Server Error, GET Method');
    }
});

module.exports = router;
