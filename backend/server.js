const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db') // dir
const port = process.env.PORT || 5000

connectDB() // connects to database throu directory

const app = express()

// middleware
app.use(express.json()) // provides reading requests as a json type
app.use(express.urlencoded({ extended: false }))

app.use('/api/goals', require('./routes/goalRoutes'))
app.use('/api/users', require('./routes/userRoutes'))

app.use(errorHandler) // overwrites the default Express Error Handler

app.listen(port, () => console.log(`Server started on port ${port}`))
