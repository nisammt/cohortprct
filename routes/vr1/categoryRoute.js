const { createCategory, getCategory } = require('../../controllers/categoryController')




const categoryRoter = require('express').Router()


categoryRoter.get("/categorylist", getCategory) 
categoryRoter.post("/create-category", createCategory)
///productsRouter.get("/getProduct", allProduct)
//productsRouter.get("/getProduct-details")
//productsRouter.put("/update-product")
//productsRouter.delete("/delete-produc")


module.exports = categoryRoter




