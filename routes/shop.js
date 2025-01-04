const path = require('path');

const express = require('express');

const rootdir = require('../util/path');
const adminData = require('./admin');

const router = express.Router();

router.get('/users', (req, res, next) => {
    console.log("In the Middleware");
    res.send('<h1>Welcone to Express JS Users Page</h1>');
});

router.get('/', (req, res, next) => {
    console.log(adminData.products);
    // console.log("In the another Middleware");
    // res.sendFile(path.join(rootdir, 'views', 'shop.html'));
    res.render('shop', {prods: adminData.products, producttitle: 'Shop', path: '/'});
})

module.exports = router