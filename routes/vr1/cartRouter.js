const { getCart, addtoCart, deleteCart, productRemove } = require("../../controllers/cartController");

const cartRouter  =require("express").Router();
cartRouter.get('/getcart', getCart);
cartRouter.post('/addcart', addtoCart);
cartRouter.delete('/deletecart-item',productRemove);
cartRouter.delete('/clearcart',deleteCart );
module.exports = cartRouter;




