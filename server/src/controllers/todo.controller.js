const TodoService = require('../services/todo.service')

class TodoController {
	async getTodos(req, res) {
		try {
			const result = await TodoService.getTodos()
			if (!result.success) return res.status(400).json(result)
			res.status(200).json(result)
		} catch (error) {
			return res.status(500).json({ success: false, error: 'Server error' })
		}
	}

	async getTodo(req, res) {
		try {
			const result = await TodoService.getTodoById(req.params.id)
			if (!result.success) return res.status(404).json(result)
			res.status(200).json(result)
		} catch (error) {
			return res.status(500).json({ success: false, error: 'Server error' })
		}
	}

	async createTodo(req, res) {
		try {
			const result = await TodoService.createTodo(req.body)
			if (!result.success) return res.status(400).json(result)
			res.status(201).json(result)
		} catch (error) {
			return res.status(500).json({ success: false, error: 'Server error' })
		}
	}

	async updateTodo(req, res) {
		try {
			const result = await TodoService.updateTodo(req.params.id, req.body)
			if (!result.success) return res.status(404).json(result)
			res.status(200).json(result)
		} catch (error) {
			return res
				.status(500)
				.json({ success: false, error: `Server error: ${error.message}` })
		}
	}

	async deleteTodo(req, res) {
		try {
			const result = await TodoService.deleteTodo(req.params.id)
			if (!result.success) return res.status(404).json(result)
			res.status(200).json(result)
		} catch (error) {
			return res.status(500).json({ success: false, error: 'Server error' })
		}
	}
}

module.exports = new TodoController()
