const mongoose = require('mongoose');

// home page dp and title 
const HomeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  image: {
    public_id: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    }
  }
})

module.exports = mongoose.model('Home', HomeSchema);