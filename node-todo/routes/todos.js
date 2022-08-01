const express = require('express');
const todoController = require('./../controllers/todoController.js')
const router = express.Router();

router.get('/', todoController.getTodos);
router.get('/:id', todoController.getTodoDetails);

module.exports = router;

