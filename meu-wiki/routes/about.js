var express = require('express');
var router = express.Router();

// GET /about
router.get('/', function(req, res, next) {
  res.render('about', { title: 'About - My Simple Wiki' });
});

module.exports = router;