var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  // res.render('home');
  res.render('home', { title: 'Aquarium' });
});


router.get('/*', function(req, res, next) {
  res.render('home', { title: 'Aquarium (wrong url, redirected to home)' });
});



module.exports = router;
