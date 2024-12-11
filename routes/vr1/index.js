const productsRouter = require('./productRoute.js')
const userRouter = require('./userRoutes')
const vr1Router = require('express').Router()

vr1Router.use("/user", userRouter)
vr1Router.use("product", productsRouter)

module.exports = vr1Router