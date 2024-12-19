const adminRouter = require('./adminRouter.js')
const cartRouter = require('./cartRouter.js')
const categoryRoter = require('./categoryRoute.js')
const productsRouter = require('./productRoute.js')
const userRouter = require('./userRoutes')
const vr1Router = require('express').Router()

vr1Router.use("/user", userRouter)
vr1Router.use("/product", productsRouter)
vr1Router.use("/admin", adminRouter)
vr1Router.use('/category',categoryRoter)
vr1Router.use('/cart', cartRouter)



module.exports = vr1Router