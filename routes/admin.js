const path = require('path');

const express = require('express');

const rootdir = require('../util/path');

const router = express.Router();

const products = [];

router.get('/add-products', (req, res, next) => {
    //console.log("In the Middleware add product");
    //res.send('<form action="/product" method="POST"><input type="text" name="title"><button>Add Product</button></form>');
    //res.sendFile(path.join(rootdir, 'views', 'add-product.html'));
    res.render('add-product', {productTitle: "Add Product", path: '/add-products'})
});
router.post('/add-products', (req, res, next) => {
    products.push({ title: req.body.title});
    res.redirect('/');
});

exports.routes = router;
exports.products = products;