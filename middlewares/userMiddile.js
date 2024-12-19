const jwt = require("jsonwebtoken");

const userMiddile = (req, res, next)=>{

try {

 const {token} =req.cookies;
 if(!token){
    return res.status(401).json({ message: "user not registerd" });
 }
 const decoded = jwt.verify(token, process.env.JWT_KEY);
 if(!decoded){
    return res.status(401).json({ message: "user not registerd" });
 }
 
      req.user = decoded


next()
    
} catch (error) {
   return res.status(500).json({ message: "something went worng please try again" }); 
}
}

module.exports = {userMiddile}