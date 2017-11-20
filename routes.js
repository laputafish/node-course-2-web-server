var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.render('home.hbs', {
      pageTitle: 'Home Page',
      welcomeMessage: 'Welcome to  my website'
    });
});

router.get('/about', (req, res) => {
    res.render('about.hbs',{
      pageTitle: 'About Page'
    });
});

module.exports = router;
