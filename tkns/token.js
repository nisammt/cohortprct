var jwt = require('jsonwebtoken');

const tokenGenrate = (user, userType)=>{
    try {
        var token = jwt.sign({id: user._id, userType: userType},process.env.JWT_KEY);
       
        return token;
        
    } catch (error) {
        res.status(error.status || 500).json({error:error.message || "internal server Error"});
    }
}
module.exports = {tokenGenrate}