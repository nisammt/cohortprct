const carouselDb = require("../models/carouselModel");

const addCarousel = async(req, res) =>{
    try {
          const {title, color} = req.body

          if( title || color){

            return res.status(400).json({})
          };
           
          
          const adminId = req.user.id;
          const uploadResult = await


        

        res.status(400).json({message: " all filed are require"});
        
    } catch (error) {

        res.status(error.status || 500).json({error: error.message || "internal server error" })        
        
    }
}

module.exports ={addCarousel}