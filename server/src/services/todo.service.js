const Todo = require('../models/todo.model')

// Сервис для работы с задачами

class TodoService {
	async getTodos() {
		try {
			const todos = await Todo.find().sort({ createdAt: -1 })
			return { success: true, data: todos }
		} catch (error) {
			return { success: false, error: error.message }
		}
	}

	async getTodoById(id) {
		try {
			const todo = await Todo.findById(id)
			if (!todo) return { success: false, error: 'Todo not found' }
			return { success: true, data: todo }
		} catch (error) {
			return { success: false, error: error.message }
		}
	}

	async createTodo(todoData) {
		try {
			const todo = await Todo.create(todoData)
			return { success: true, data: todo }
		} catch (error) {
			return { success: false, error: error.message }
		}
	}
	async updateTodo(id, updatedData) {
		try {
			const todo = await Todo.findByIdAndUpdate(id, updatedData)

			if (!todo) {
				return { success: false, error: 'Todo not found' }
			}

			return { success: true, data: todo }
		} catch (error) {
			return { success: false, error: error.message }
		}
	}

	async deleteTodo(id) {
		try {
			const todo = await Todo.findByIdAndDelete(id)
			if (!todo) return { success: false, error: 'Todo not found' }
			return { success: true, data: todo }
		} catch (error) {
			return { success: false, error: error.message }
		}
	}
}

module.exports = new TodoService()
