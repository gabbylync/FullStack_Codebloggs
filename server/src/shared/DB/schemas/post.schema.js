const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
  content: {
    type: String,
    trim: true,
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
   
  },

  comment: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Comment",
  }


  
  
},{timestamps: true});

module.exports = mongoose.model('Post', PostSchema)