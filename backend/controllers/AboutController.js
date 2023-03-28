const About = require('../models/AboutModel');

// create about section
exports.createAbout = async (req, res) => {
  try {
    const about = await About.create(req.body);
    res.status(200).json({
      success: true,
      about
    })
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message
    })
  }
}

// get about section
exports.getAbout = async (req, res) => {
  try {
    const about = await About.find();
    res.status(200).json({
      success: true,
      about
    })
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message
    })
  }
}