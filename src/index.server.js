const express = require('express')
const env = require('dotenv')

// environment variable or you can say constants
const app = express()
env.config()
app.use(express.json())

// routes
const authRoutes = require('./routes/auth')

// api
app.use('/api', authRoutes)

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})