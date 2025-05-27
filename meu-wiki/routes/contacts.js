var express = require('express');
var router = express.Router();

/* GET Contatos page. */
router.get('/', function(req, res, next) {
  res.render('contacts', { title: 'Contatos - Meu Wiki' });
});

module.exports = router;