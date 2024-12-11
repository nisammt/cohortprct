const { userRegister, login, userProfile, logout, userCheking } = require('../../controllers/userController')
const { userMiddile } = require('../../middlewares/userMiddile')

const userRouter = require('express').Router()

userRouter.post('/signup',userRegister)
userRouter.post('/login',login)
userRouter.get('/profile',userMiddile, userProfile)
userRouter.get('/logout',userMiddile,logout)
userRouter.get('/user-check' ,userMiddile, userCheking)


module.exports = userRouter