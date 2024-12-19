const mongoose =require('mongoose')
 

const ProductSchema = new mongoose.Schema({
    
    title:{
            type: String,
            require : true
        },
        price:{
            type: Number,
            require: true
            
        },
        stock:{
            type: Number  
          },
        image:{
            type: String

        },

       categoty:{ type:mongoose.Types.ObjectId, ref: "categories"},

        createdby :{type :mongoose.Types.ObjectId, ref: "users"},
      
        
},

{timestamps: true})

module.exports = new mongoose.model("products",ProductSchema)