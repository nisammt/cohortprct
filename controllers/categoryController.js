const category = require('../models/categoryModel')

const createCategory = async (req, res)=>{
  try {
    const {name } = req.body;
    //console.log(name)
    if(!name){
        return(res.status(400).json({message: "All field are requore"}));
    };

     const newCategory = new category({name})
     console.log(newCategory);
     await newCategory.save();
      res.status(200).json({ message: "Category created successfully", data: newCategory });

    
  } catch (error) {
    res.status(500).json({message: " something went wrong please try again"});
  };

};
const getCategory = async(req , res)=>{
    try {
        const categoryList = await category.find();
        res.status(200).json({ message: "Category list fetched", data: categoryList });
        
    } catch (error) {
        res.status(500).json({message: " something went wrong please try again"});   }
}

module .exports ={createCategory, getCategory}