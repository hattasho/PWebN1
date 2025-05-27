// routes/index.js
const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: "Saul's Wiki", content: "Bem-vindo ao Saul's Wiki!" });
});

module.exports = router;