const { Router } = require('express')
const userController = require('../controllers/userController')
const authenticate = require('../middlewares/authenticate')

const userRouter = Router()

userRouter.post('/signup', userController.create)
userRouter.post('/login', userController.login)
userRouter.get('/self', authenticate, userController.self)

module.exports = userRouter