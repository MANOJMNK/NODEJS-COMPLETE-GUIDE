const path = require('path');

const express = require('express');

const rootdir = require('../util/path');

const router = express.Router();

router.use('/users', (req, res, next) => {
    console.log("In the Middleware");
    res.send('<h1>Welcone to Express JS Users Page</h1>');
});

router.use('/', (req, res, next) => {
    console.log("In the another Middleware");
    res.sendFile(path.join(rootdir, 'views', 'shop.html'));
})

module.exports = router