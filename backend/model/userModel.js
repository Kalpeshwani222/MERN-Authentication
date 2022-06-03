const mongoose = require("mongoose");

const authSchema = mongoose.Schema({
  
 name:{
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    verified :{
      type:Boolean,
      default:false,
    },
    
},{
        timestamps:true,
    }
);

const authentication = mongoose.model("user",authSchema);

 module.exports = authentication;