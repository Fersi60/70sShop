const crypto = require("crypto") ; 
const mongoose = require("mongoose") ; 
const bcrypt = require("bcryptjs") ; 
const jwt = require('jsonwebtoken') ; 
const userSchema = new mongoose.Schema({
    username: {
        type: String ,
        required: [true , "Please Provide a username"]
    } , 
    email:{
        type: String, 
        required:  [true , "Please Provide a email"] ,
        unique:true,
        match:[
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            "Please provide a valid email",
        ]
    }  ,
    password:{
        type: String,
        required: [true,"Please Provide a Password"] ,
        minlength:6,
        select: false
    },

    resetPassswordToken:String,
    resetPassswordExpire:String,
}); 

userSchema.pre("save",async function(next){
    if(!this.isModified("password")){
        next();
    }

    const salt = await bcrypt.genSalt(10) ; 
    this.password = await bcrypt.hash(this.password,salt) 
    next() ; 
});
userSchema.methods.matchPasswords = async function(password) { 
        return await bcrypt.compare(password,this.password) ; 
}
userSchema.methods.getSignedJwtToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRE,
    });
  };
  userSchema.methods.getResetPasswordToken =function(){
    const resetToken = crypto.randomBytes(20).toString("hex") ; 
    this.resetPassswordToken = crypto.createHash("sha256").update(resetToken).digest("hex") ; 
    this.resetPassswordExpire = Date.now() + 10 *(60*1000) ; 
    return resetToken
  }
const User = mongoose.model("User",userSchema) ; 
module.exports = User ;

