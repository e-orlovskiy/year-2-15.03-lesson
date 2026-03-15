const mongoose = require('mongoose')

// схема для задачи (Todo)
// схема определяет структуру документа в MongoDB

const todoSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: [true, 'Title is required'],
			trim: true,
			minlength: [3, 'Title must be at least 3 characters long'],
			maxlength: [40, 'Title cannot exceed 40 characters']
		},
		description: {
			type: String,
			trim: true,
			maxlength: [100, 'Description cannot exceed 100 characters']
		},
		completed: {
			type: Boolean,
			default: false
		},
		priority: {
			type: String,
			default: 'medium',
			enum: {
				values: ['low', 'medium', 'high'],
				message: 'Invalid priority value'
			}
		}
	},
	{
		timestamps: true
	}
)

/* todoSchema.pre('save', function (next) {
/ 	this.updatedAt = Date.now()
/  })
*/

const Todo = mongoose.model('Todo', todoSchema)

module.exports = Todo
