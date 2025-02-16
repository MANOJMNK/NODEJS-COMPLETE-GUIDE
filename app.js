const express = require('express');
const bodyParser = require('body-parser');
//const expressHbs = require('express-handlebars');

const path = require('path');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();

//app.engine('hbs', expressHbs());
//app.set('view engine', 'hbs');
app.set('view engine', 'pug');
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, "public")));


app.use(adminData.routes);
app.use(shopRoutes);

// app.use((req, res, next) => {
//     res.status(404).sendFile(path.join(__dirname, 'views', 'page-not-found.html'));
// });

app.listen(3000);