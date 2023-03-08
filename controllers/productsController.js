
const express = require('express');
const router = express.Router();
// const { check, validationResults } = require('express-validator');
const { copyFile } = require('fs');

const Product = require('../models/Product');
const Providers = require('../models/Providers');


const getAllProducts = async (req, res) => {

    try {
        const products = await Product.find({}).populate({path: 'provider', Model: Providers });
        res.json(products);
    } catch (err) {
        req.statusCode(500).send('Server Error, GET Method');
    }
}

const getProduct = async (req, res) => {
    try {
        const product = await Product.find({id: req.params.id}).populate({path: 'provider', Model: Providers });
        res.json(product);
        console.log(product);

    } catch (err) {
        req.statusCode(500).send('Server Error, GET Method');
    }
}

module.exports = {
    getAllProducts,
    getProduct
}