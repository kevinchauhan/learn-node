const express = require('express')
const cookieParser = require('cookie-parser')
const dbConnection = require('./config/db')
const Config = require('./config')
const userRouter = require('./routes/userRoute')
const app = express()
const PORT = Config.PORT || 5000

// db connection
dbConnection()

// parse body
app.use(express.json())
app.use(cookieParser())

// routes
app.use('/api/user', userRouter)


app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`)
})