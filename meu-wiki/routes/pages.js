const express = require('express');
const router = express.Router();
const Comment = require('../models/Comment');

router.get('/', (req, res) => {
  res.render('pages', { title: 'Todas as Páginas' });
});

router.get('/new', (req, res) => {
  res.render('newpage', { title: 'Nova Página' });
});

router.get('/:person', async (req, res) => {
  const { person } = req.params;

  try {
    const comments = await Comment.find({ person }).sort({ createdAt: -1 });

    res.render(person, {
      title: person.charAt(0).toUpperCase() + person.slice(1),
      comments,
    });
  } catch (err) {
    res.status(500).send('Erro ao carregar a página: ' + err.message);
  }
});

module.exports = router;