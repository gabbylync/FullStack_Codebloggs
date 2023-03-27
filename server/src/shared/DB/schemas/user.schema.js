const mongoose = require('mongoose')
var validator = require('validator');


const UserSchema = new mongoose.Schema({
  first_name: {
    type: String,
    trim: true,
    required: true,
    maxLength: 25
    
  },
  last_name: {
    type: String,
    trim: true,
    required: true,
    maxLength: 25
    
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
    maxLength: 25,
    validate:[validator.isEmail, 'provide valid email'],
    maxLength: 50

  },
 password: {
    type: String,
    trim: true,
    required: true
 },

 status: {
    type: String,
    required: true,
    maxLength: 25
 },

 location: {
    type: String,
    required: true,
    maxLength: 25

 },

 occupation: {
    type: String,
    required: true,
    maxLength: 25
 },

 auth_level: {
    type: String,
    
 }


  
  
},{timestamps: true});

module.exports = mongoose.model('User', UserSchema)