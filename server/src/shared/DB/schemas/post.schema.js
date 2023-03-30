

const mongoose = require('mongoose')

// const date = require('date-and-time')
// const value = date.format((new Date()),'YYYY/MM/DD HH:mm:ss');


const PostSchema = new mongoose.Schema({
  content: {
    type: String,
    trim: true,
    required: true
    
  },

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  likes: {
    type: Number, 
    min: 0,
    default: 0
    // required: true,
   
  },

  comment: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Comment",
  },

date:{
  
  type: Date,
  default: Date.now
}
  
  
},{timestamps: true});

module.exports = mongoose.model('Post', PostSchema)