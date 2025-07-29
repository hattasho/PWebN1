const express = require('express');
const router = express.Router();
const Comment = require('../models/Comment');

// Recebe comentários via POST
router.post('/:person', async (req, res) => {
  const { name, text } = req.body;
  const { person } = req.params;

  try {
    await Comment.create({ person, name, text });
    res.redirect(`/pages/${person}`);
  } catch (err) {
    res.status(500).send('Erro ao salvar comentário');
  }
});

module.exports = router;