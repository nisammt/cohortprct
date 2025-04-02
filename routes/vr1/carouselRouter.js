const { addCarousel } = require("../../controllers/carouselController");
const { createProduct } = require("../../controllers/productController");

const {upload} = require('../../middlewares/multermiddile')
const carouselRouter = require('express').Router()

carouselRouter.post("/add-carousel", upload.single("image"),addCarousel)
 


module.exports = carouselRouter