const mongoose = require('mongoose')


const cartSchema = new mongoose.Schema(
      {
    productid:{ type:mongoose.Types.ObjectId, ref: "products"},

    quantity:{
        type: Number
    }


},{timestamps: true})

cartSchema.methods.calculateTotalPrice= function(){
    this.totalPrice= this.product.reduce((total, product)=> total+product.price,0);
}

module.exports = new mongoose.model("cart",cartSchema)



