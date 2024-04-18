const express = require('express')
const categoryController = require('../controllers/categoryController')
const catRouter = express.Router()

catRouter.get('/', categoryController.get)

module.exports = catRouter