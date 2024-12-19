


const { cloudinaryInstance } = require('../config/cloudneryconfig');
const productmodel = require('../models/productModel')



const createProduct = async(req, res)=>{
   try {
    const {title , price, stock, image} = req.body;
   //  console.log(req.body);
    //console.log("location",req.file);
    //const {id} = req.user;
    //const cid = req.body;
    if(!title || !price || !stock )
    {
        return(res.status(400).json({message: "All field are require"}));

    };    

      const uploadResult = await cloudinaryInstance.uploader.upload(req.file.path);

       console.log("uploadfile",uploadResult);
   
       const newProduct = new productmodel({title , price, stock, image:uploadResult.url});
       console.log(newProduct)
       await newProduct.save();
       res.status(200).json({ message: "Product created successfully", data: newProduct });
    
    
   } catch (error) {
    res.status(500).json({message: " something went wrong please try again"});
   } 
   };
   const allProduct = async(req, res)=>{
    try {
       const products = await productmodel.find()
       res.status(200).json({ message: "Product list" , data: products});
     
    } catch (error) {
     res.status(500).json({message: " something went wrong please try again"});
                
    };
   };

    const productDetails = async (req, res)=>{
        try { 
            
        } catch (error) {
            
        }
    }

   module.exports = {createProduct, allProduct , productDetails}
