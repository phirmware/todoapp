const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  todo: {
    type: String,
    required: true,
  }
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo