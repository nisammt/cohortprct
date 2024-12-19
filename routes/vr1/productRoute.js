const { createProduct, allProduct } = require('../../controllers/productController')

const { upload } = require('../../middlewares/multermiddile')

const productsRouter = require('express').Router()

productsRouter.post("/create-product", upload.single("image"),createProduct)
productsRouter.get("/getProduct", allProduct)
productsRouter.get("/getProduct-details")
productsRouter.put("/update-product")
productsRouter.delete("/delete-produc")



module.exports = productsRouter