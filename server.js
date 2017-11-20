const express = require('express');

// hbs

var app = express();

app.set('view engine', require('./view_engine'));

app.use(express.static(__dirname + '/public'));

// Routes
app.use( (req, res, next) => {
  var now = new Date().toString();
  console.log( `${now}: ${req.method} ${req.url}`);
  next();
});app.use(require('./routes'));


app.listen(3000, () => {
    console.log('Server is listening on 3000 ...');
});