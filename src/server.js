const express = require('express')
const catRouter = require('./routes/categoryRoute')
const dbConnection = require('./config/db')
const Config = require('./config')
const app = express()
const PORT = Config.PORT || 5000

// db connection
dbConnection()

// parse body
app.use(express.urlencoded({ extended: false }))

// routes
app.use('/category', catRouter)

app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`)
})