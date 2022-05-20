const mongoose = require("mongoose");

const commentSchema = mongoose.Schema({
  
user:{
      type:String,
      default:"Kalpesh Wani",
  },
  content:{
      type:String,
     required: true,
  },

},{
        timestamps:true,
    }
);

const Comments = mongoose.model("comments",commentSchema);

 module.exports = Comments;