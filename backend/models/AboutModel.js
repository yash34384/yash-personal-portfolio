const mongoose = require('mongoose');

const AboutSchema = new mongoose.Schema({
  intro: {
    type: String,
    required: true
  },
  work: {
    type: String,
  },
  college: {
    type: String,
    required: true
  },
  achieve: {
    type: String
  }
})

module.exports = mongoose.model('About', AboutSchema);