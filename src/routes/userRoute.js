const { Router } = require('express')
const userController = require('../controllers/userController')

const userRouter = Router()

userRouter.post('/signup', userController.create)
userRouter.post('/login', userController.login)
userRouter.get('/self', userController.self)

module.exports = userRouter