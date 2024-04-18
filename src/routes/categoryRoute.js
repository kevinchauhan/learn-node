const express = require('express')
const catRouter = express.Router()

catRouter.get('/', (req, res) => {
    res.send('category')
})

module.exports = catRouter