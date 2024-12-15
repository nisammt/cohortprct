const { userRegister, login, userProfile, logout, userCheking, forgotPassword } = require('../../controllers/userController')
const { userMiddile } = require('../../middlewares/userMiddile')

const userRouter = require('express').Router()

userRouter.post('/signup',userRegister)
userRouter.post('/login',login)
userRouter.get('/profile',userMiddile, userProfile)
userRouter.get('/logout',userMiddile,logout)
userRouter.get('/user-check' ,userMiddile, userCheking)
userRouter.post('/forgotpwd', forgotPassword)


module.exports = userRouter