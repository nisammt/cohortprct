const mongoose = require('mongoose')


const cartSchema = new mongoose.Schema({

    productid : {
        type: Schema.Types.ObjectId,
        ref:"products"
        
    },
    quantity:{
        type: Number
    }


},{timestamps: true})

module.exports = new mongoose.model("cart",cartSchema)