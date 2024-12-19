
const UserModel = require('../models/userModel');
const bcrypt = require('bcrypt');
const { tokenGenrate } = require("../tkns/token");
const nodemailer= require('nodemailer');
const { json } = require('express');

const adminPanel = async (req, res)=>{

  
   try {
    const {email, password, userType} = req.body
           if(!email || !password){
            return res.status(400).json({ error: "All feilds are required" });
           }
          const user = await UserModel.findOne({email})
          console.log(user)
          if(!user){
            return res.status(400).json({ error: "user user does not exist" });
          }
          
         const passwordcheck = await bcrypt.compare(password,user.password);
          console.log(passwordcheck);
          
          if(!passwordcheck)
          {
            res.status(400).json({message: "incorrect password"})
          }
          if(!user.userType == "admin")
          {
            res.status(400).json({message : "invalid user"})
          }
          
          const token = tokenGenrate(user, "user")
      // console.log(token)
      res.cookie("token",token)
      
      //res.send("login succesfully")
      res.status(200).json({message:"admin page logined", data:user});


   
   
}
   catch (error) {
      res.status(500).json({message: " something went worng"})
       }

}
const getallUsers = async (req ,res)=>{
 try {
  const allUsers = await UserModel.find().select("-password");
  res.status(200).json({ message: "users list fetched", data: allUsers });

  
 } catch (error) {
  res.status(500).json({message: " something went wrong please try again"});   }
   
}
module.exports = {adminPanel,getallUsers}