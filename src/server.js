const express = require('express')
const catRouter = require('./routes/categoryRoute')
const app = express()
const PORT = process.env.PORT || 5000


// routes
app.use('/category', catRouter)

app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`)
})