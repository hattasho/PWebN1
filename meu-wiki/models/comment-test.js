const mongoose = require('mongoose');

const comentarioSchema = new mongoose.Schema({
  nome: String,
  texto: String
});

module.exports = mongoose.model('Comentario', comentarioSchema);