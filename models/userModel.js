const mongoose = require('mongoose');
 

const UserSchema = new mongoose.Schema({
    name:{
        type: String,
         maxLength: 30,
         minLength:3,
         require: true
    },
    password:{
        type: String,
        require: true,
        minLength: 8
    },
    email:{
        type: String,
        unique: true,
        require: true,
        minLength: 3,
        maxLength:20,
    },
    mobile: {
        type: String,
        require: true,
        minLength: 7
    },
    
    userType: {
        type: String,
        enum : ['user','admin'],
        default: 'user'
    },
    profillepic:{
       type:String,
       defalut: "https://cdn-icons-png.flaticon.com/512/149/149071.png"

    },
    IsActive:{
        type:Boolean,
        default:"true",
    }

    
},{timestamps: true})
module.exports = new  mongoose.model("users",UserSchema)