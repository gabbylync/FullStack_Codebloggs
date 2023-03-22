const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  first_name: {
    type: String,
    trim: true,
    required: true
    
  },
  last_name: {
    type: String,
    trim: true,
    required: true
    
  },

  birthday: {
    type: Date,
    // required: true
  },
  email: {
    type: String,
    trim: true,
    required: true,
    unique: true

  },
 password: {
    type: String,
    required: true
 },

 status: {
    type: String,
    required: true
 },

 location: {
    type: String,
    required: true

 },

 occupation: {
    type: String,
    required: true
 },

 auth_level: {
    type: String,
    // required: true
 }


  
  
},{timestamps: true});

module.exports = mongoose.model('Users', UserSchema)