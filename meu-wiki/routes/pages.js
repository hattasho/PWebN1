// routes/pages.js
const express = require('express');
const router = express.Router();

router.get('/luiz', (req, res, next) => {
  res.render('luiz', { title: 'Luiz'});
});

router.get('/sophia', (req, res, next) => {
  res.render('sophia', { title: 'Sophia'});
});

router.get('/pedro', (req, res, next) => {
  res.render('pedro', { title: 'Pedro'});
});

router.get('/levi', (req, res, next) => {
  res.render('levi', { title: 'Levi'});
});

router.get('/', (req, res) => {
  res.render('pages', { title: 'Todas as Páginas' });
});

router.get('/new', (req, res) => {
  res.render('newpage', { title: 'Nova Página' });
});

router.get('/:slug', (req, res) => {
  res.render('page', { title: `Página: ${req.params.slug}` });
});

module.exports = router;