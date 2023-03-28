const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const LoginSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
})

// creating JWT Token 
LoginSchema.methods.getJWTToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
}

// comparing password of user 
LoginSchema.methods.comparePassword = function (password) {
  if (password === this.password) {
    return true;
  }
  else {
    return false;
  }
}

module.exports = mongoose.model('Login', LoginSchema);