const multer = require('multer');

const storage = multer.diskStorage({
    filename: function(req ,file, cb)
    {
        console.log("multer console",file)
        cb(null, file.originalname);
    },

    
});
const upload = multer ({storage: storage })
module.exports ={upload};