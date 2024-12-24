const Cart = require("../models/CartModel");
const Product = require("../models/productModel");

const getCart = async (req, res)=>{
  try {
    const uid = req.user.id;
    const cart = await Cart.findOne({uid}).populate("product.productId");
    if(cart){
        return res.status(404).json({ message: "Cart not found" });
    }
    
    res.status(200).json({ message: "cart data loaded successfully", data: cart });

  } catch (error) {
    res.status(500).json({ message: "something went wrong", error });

  }
};
const addtoCart = async (req, res)=>{
    try {
        const uid = req.user.id;
        const {ProductId} = req.body;
        if(!ProductId) {
            return res.status(400).json({ message: "product not found" });
        };
        const product = await Product.findById(ProductId);
        if (!product) {
            return res.status(404).json({ message: "product not found" });
        }
        let cart = await Cart.findOne({uid});
        if(!cart){
            cart = new Cart({userId, product: []});
        };
        const productExist = cart.product.some((item)=> item.ProductId.equals(ProductId));
        if(productExist){
            return res.status(400).json({ message: "Product already added to cart" });
        };
        cart.Product.push({
            ProductId,
            price: product.price,
        });
        cart.calulateTotalPrice();
        await cart.save();
        res.status(200).json({ message: "product added to cart", data: cart });
    
        
    } catch (error) {
        res.status(500).json({ message: "something went wrong", error });
        
    };
};
    const productRemove = async(req, res)=>{
        try {
            const uid = req.user.id;
            const {productId} = req.body;
            let cart = await Cart.findOne({uid});
            if(!cart){
                return res.status(404).json({ message: "Cart not found" });
            };
            cart.product = cart.product.filter((item)=>!item.productId.equals(productId));
            cart.calulateTotalPrice();
            await cart.save();
            res.status(200).json({ message: "cart product removed", data: cart });

           
        } catch (error) {
            res.status(500).json({ message: "something went wrong", error });               
       
        }
};
 const deleteCart =async (req, res)=>{
    try {
         const uid= req.user.id;
         
         const cart = await Cart.findOne({uid});
          cart.product=[];
          cart.calulateTotalPrice();
          await cart.save();
          
        res.status(200).json({ message: "cart deleted successfully", data: cart });

    } catch (error) {
        res.status(500).json({ message: "something went wrong", error }); 

    };
   };
   module.exports ={getCart, addtoCart , deleteCart, productRemove}