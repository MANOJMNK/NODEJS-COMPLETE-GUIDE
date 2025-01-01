const express = require('express');

const router = express.Router();

router.use('/users', (req, res, next) => {
    console.log("In the Middleware");
    res.send('<h1>Welcone to Express JS Users Page</h1>');
});

router.use('/express', (req, res, next) => {
    console.log("In the another Middleware");
    res.send('<h1>Welcone to Express JS</h1>');
})

module.exports = router