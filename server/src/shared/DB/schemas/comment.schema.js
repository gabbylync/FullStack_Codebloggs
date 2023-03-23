const mongoose = require('mongoose')

const CommentSchema = new mongoose.Schema({
  content: {
    type: String,
    trim: true,
    // required: true
    
  },
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post",
    // required: true
    
  },

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    // required: true
  },
  likes: {
    type: Number, 
    // required: true,
   

  }


  
  
},{timestamps: true});

module.exports = mongoose.model('Comment', CommentSchema)