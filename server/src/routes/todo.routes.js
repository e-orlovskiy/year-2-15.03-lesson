const express = require('express')
const router = express.Router()
const TodoController = require('../controllers/todo.controller')

router.get('/', TodoController.getTodos)
router.get('/:id', TodoController.getTodo)
router.post('/', TodoController.createTodo)
router.put('/:id', TodoController.updateTodo)
router.delete('/:id', TodoController.deleteTodo)

module.exports = router
