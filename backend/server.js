const express = require('express')
const dotenv = require('dotenv').config()
const { errorHandler } = require('./middleware/errorMiddleware')
const port = process.env.PORT || 5000

const app = express()

// middleware
app.use(express.json()) // provides reading requests as a json type
app.use(express.urlencoded({ extended: false }))

app.use('/api/goals', require('./routes/goalRoutes'))

app.use(errorHandler) // overwrites the default Express Error Handler

app.listen(port, () => console.log(`Server started on port ${port}`))
