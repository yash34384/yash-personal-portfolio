const mongoose = require('mongoose');

// home page skills
const SkillSchema = new mongoose.Schema({
  image: {
    public_id: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    }
  },
  name: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Skills', SkillSchema);