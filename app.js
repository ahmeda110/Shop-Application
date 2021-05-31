const express = require('express');
const bodyParse = require('body-parser');
const admin = require('./routes/admin');
const shop = require('./routes/shop');
const bodyParser = require('body-parser');

const app = express();
app.set('view engine', 'pug');
app.use(bodyParse.urlencoded( {extended: false} ));

app.use('/admin', admin.router);
app.use(shop);

app.use((req, res, next) => {
  res.status(404).render('404', {pageTitle: 'Page Not Found'});
    
});

app.listen(5000);

