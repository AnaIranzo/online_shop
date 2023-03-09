
const express = require('express');
const router = express.Router();
const { copyFile } = require('fs');
const Product = require('../models/Product');
const Providers = require('../models/Providers');

/** Find all products in mongodb collection
 * @returns {products} json
 */
const getAllProducts = async (req, res) => {

    try {
        const products = await Product.find({}).populate({path: 'provider', Model: Providers });
        res.json(products);
    } catch (err) {
        req.statusCode(500).send('Server Error, GET Method');
    }
}

/** Find one products that matches id in mongodb collection
 * @returns {product} json
 */
const getProduct = async (req, res) => {
    try {
        const product = await Product.find({id: req.params.id}).populate({path: 'provider', Model: Providers });
        res.json(product);

    } catch (err) {
        req.statusCode(500).send('Server Error, GET Method');
    }
}

module.exports = {
    getAllProducts,
    getProduct
}