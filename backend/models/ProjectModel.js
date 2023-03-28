const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  name: {
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
  },
  link: {
    type: String
  },
  tech: {
    type: String,
    required: true
  },
  code: {
    type: String
  },
  category: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Project', ProjectSchema);
