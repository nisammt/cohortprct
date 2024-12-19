const jwt = require("jsonwebtoken");
const { userCheking } = require("../controllers/userController");

const adminMiddile = (req, res, next)=>{
    try {
        const {token} = req.cookies;
        if(!token){
            return res.status(401).json({message: "invalid user"});
        }
          const decode = jwt.verify(token, process.env.JWT_KEY);
          console.log(decode)
        if(!decode){
            return res.status(401).json({message: "user not autherized"});
        }
        if (decode.usertype !== "admin") {
            return res.status(401).json({ message: "user not autherized" });
         }
        
    
       req.user = decode;

       next() 
    } catch (error) {
        
        res.status(500).json({message: "something went worng , please try agian"})
        
    }
};
module.exports ={adminMiddile};