const express = require('express')
const cors = require('cors')
const todoRoutes = require('./routes/todo.routes')
require('dotenv').config()

const connectDB = require('./config/db')

// подключение к БД
connectDB()

const app = express()
const PORT = process.env.PORT || 3000

app.use(
	cors({
		methods: 'GET, POST, DELETE, PUT',
		origin: process.env.CLIENT_URL
	})
)

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use((req, res, next) => {
	console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`)
	next()
})

// Маршруты
app.use('/api/todos', todoRoutes)
// app.use('/api/users', usersRoutes)
// app.use('/auth', authRoutes)

app.get('/', (req, res) => {
	return res.json({ message: 'hello' })
})

app.listen(PORT, () => {
	console.log(`Server is running on port: ${PORT}`)
})
