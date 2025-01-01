const express = require('express');

const router = express.Router();

router.use('/add-products', (req, res, next) => {
    console.log("In the Middleware add product");
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button>Add Product</button></form>');
});
router.use('/product', (req, res, next) => {
    console.log(res.body);
    res.redirect('/');
});

module.exports = router;