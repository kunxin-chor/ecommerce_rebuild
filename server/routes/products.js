const express = require('express');
const router = express.Router();
const pool = require('../database');
const productsService = require('../services/productService');

// GET all products
router.get('/', async (req, res) => {
    const products = await productsService.getAllProducts();
    res.json(products);
});

// GET a single product
router.get('/:id', async (req, res) => {
    const product = await productsService.getProductById(req.params.id);
    res.json(product);
});

module.exports = router;