const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  person: String,
  name: String,   
  text: String,   
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Comment', commentSchema);