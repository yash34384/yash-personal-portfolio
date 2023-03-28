const Project = require('../models/ProjectModel');
const cloudinary = require('cloudinary');

// create Project 
exports.createProject = async (req, res) => {
  try {
    const myCloud = await cloudinary.v2.uploader.upload(req.body.image, {
      folder: "portfolio",
      width: 150,
      crop: "scale"
    });
    const { name, link, tech, code, category } = req.body;
    const project = await Project.create({
      name,
      image: {
        public_id: myCloud.public_id,
        url: myCloud.secure_url
      },
      link,
      tech,
      code,
      category
    });
    res.status(200).json({
      success: true,
      project
    })
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message
    })
  }
}

// get all projects
exports.getProject = async (req, res) => {
  try {
    const project = await Project.find();
    res.status(200).json({
      success: true,
      project
    })
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message
    })
  }
}