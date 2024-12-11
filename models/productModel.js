const mongoose =require('mongoose')
 

const productSchema = new mongoose.Schema({
    
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
       category :{

        type: Schema.Types.ObjectId,
        ref:"category",

       },
       createdby :{
        type: Schema.Types.ObjectId,
        ref :"users"
       }
       
                


},{timestamps: true})

module.exports = new mongoose.model("products",productSchema)