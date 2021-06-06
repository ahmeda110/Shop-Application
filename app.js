const express = require('express'),
      bodyParser = require('body-parser'),
      path = require('path'),
      app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', require('./routes/admin'));
app.use(require('./routes/shop'));
app.use(require('./controllers/error').get404);

app.listen(5000, () => console.log('Listening on port 5000'));
