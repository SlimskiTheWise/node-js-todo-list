const express = require('express');
const todoController = require('./../controllers/todoController.js')
const router = express.Router();

router.get('/', todoController.getTodos);
router.get('/:id', todoController.getTodoDetails);
router.post('/createTodo', todoController.createTodo);
router.delete('/deleteTodo', todoController.deleteTodo);

module.exports = router;

