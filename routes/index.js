var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Aquarium' });
});



router.get('/login', function(req, res, next) {
  res.send('An error occurred! Please try again!');
});



module.exports = router;
