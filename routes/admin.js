const path = require('path');

const express = require('express');

const rootdir = require('../util/path');

const router = express.Router();

router.use('/add-products', (req, res, next) => {
    console.log("In the Middleware add product");
    //res.send('<form action="/product" method="POST"><input type="text" name="title"><button>Add Product</button></form>');
    res.sendFile(path.join(rootdir, 'views', 'add-product.html'));
});
router.use('/product', (req, res, next) => {
    console.log(res.body);
    res.redirect('/');
});

module.exports = router;