const Resume = require('../models/ResumeModel');

exports.createResume = async (req, res) => {
  try {
    const resume = await Resume.create(req.body);
    res.status(200).json({
      success: true,
      resume
    })
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message
    })
  }
}

exports.getResume = async (req, res) => {
  try {
    const resume = await Resume.find();
    res.status(200).json({
      success: true,
      resume
    })
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message
    })
  }
}