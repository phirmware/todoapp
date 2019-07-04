const express = require('express');
const db = require('../models');
const router = express.Router();

router.get('/', (req, res) => {
    db.Todo.find().then(todos => {
        res.json(todos);
    });
});

router.post('/', (req, res) => {
    db.Todo.create({ todo: req.body.todo }).then(todo => {
        res.json({ statusCode: 200, data: todo });
    }).catch(err => {
        res.send(err);
    });
});

router.post('/delete', (req, res) => {
    db.Todo.findByIdAndDelete(req.body.id).then(() => {
        res.json({ message: 'Success' });
    });
});

module.exports = router;