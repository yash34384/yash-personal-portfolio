const mongoose = require('mongoose');

const ResumeSchema = new mongoose.Schema({
  link: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Resume', ResumeSchema);