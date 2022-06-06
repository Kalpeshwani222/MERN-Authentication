const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const resetpassSchema = mongoose.Schema({

    useridid :{
        type:Schema.Types.ObjectId,
        require:true,
        ref:"user",
        unique:true,
    },

    resettoken : {
        type:String,
        require:true
    },
    createdAt : {
        type:Date,
        default:Date.now(),
        expires:1800000 // 1/2 hour
    }
})

const resetpassToken = mongoose.model("resetToken",resetpassSchema);

 module.exports = resetpassToken;