const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const tokenSchema = mongoose.Schema({
    userId :{
        type:Schema.Types.ObjectId,
        require:true,
        ref:"user",
        unique:true,
    },

    token : {
        type:String,
        require:true
    },
    createdAt : {
        type:Date,
        default:Date.now(),
        expires:3600 // 1 hour
    }
})

const token = mongoose.model("token",tokenSchema);

 module.exports = token;