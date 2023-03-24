const mongoose = require('mongoose')
var validator = require('validator');


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
    validate(val) {
      if (!validator.isDate(val)) {
          throw new Error(`Birthdate format is invalid. Format should be 'YYYY/MM/DD'. actual: ${val}`)
      }
  },
  },
  email: {
    type: String,
    trim: true,
    required: true,
    unique: true,
    validate:[validator.isEmail, 'provide valid email']

  },
 password: {
    type: String,
    trim: true,
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
    
 }


  
  
},{timestamps: true});

module.exports = mongoose.model('User', UserSchema)