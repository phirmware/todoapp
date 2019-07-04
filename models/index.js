const mongoose = require('mongoose');
mongoose.connect('mongodb://phirmware:itachi1@ds255924.mlab.com:55924/singout', {useNewUrlParser: true});

module.exports.Todo = require('./todo');