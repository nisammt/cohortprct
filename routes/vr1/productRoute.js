const { createProduct, productDetails, getAllproduct, updateProduct, deleteProduct } = require('../../controllers/productController')

const { upload } = require('../../middlewares/multermiddile')

const productsRouter = require('express').Router()

productsRouter.post("/create-product", upload.single("image"),createProduct)
productsRouter.get("/getproduct",getAllproduct)
productsRouter.get("/products/:id",productDetails)
productsRouter.put("/update-product/:id", updateProduct)
productsRouter.delete("/delete-product/:id" ,deleteProduct)



module.exports = productsRouter