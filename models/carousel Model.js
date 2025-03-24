const mongoose = require('mongoose')

const carouselSchema = new Schema(
    {
      title: {
        type: String,
        required: true,
        maxLength: 100,
      },
  
      color: {
        type: String,
        enum: ["black", "yellow"],
        required: true,
        maxLength: 10,
      },
  
      image: {
        type: String,
        default: "",
      },
  
      admin: {
        type: Schema.Types.ObjectId,
        ref: "Admin",
      },
    },
    { timestamps: true }
  );
  module.exports = new mongoose.model("carousels",carouselSchema)