const mongoose = require('mongoose')

const categorySchema = new  mongoose.Schema({
    name:{
      type: String,
    }
},{timestamps:true})

module.exports = new mongoose.model("category",categorySchema)