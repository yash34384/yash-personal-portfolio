const Home = require('../models/HomeModel');
const Skills = require('../models/SkillsModel');
const cloudinary = require('cloudinary');

// get dp and title of home page 
exports.getHome = async (req, res) => {
  const home = await Home.find();
  res.status(200).json({
    success: true,
    home
  });
}

// create dp and title of home page 
exports.createHome = async (req, res) => {
  const myCloud = await cloudinary.v2.uploader.upload(req.body.image, {
    folder: "portfolio",
    width: 150,
    crop: "scale",
  });
  const { title } = req.body;
  const home = await Home.create({
    title,
    image: {
      public_id: myCloud.public_id,
      url: myCloud.secure_url,
    }
  });
  res.status(201).json({
    success: true,
    home
  })
}

// creat skills of home page 
exports.createSkills = async (req, res) => {
  try {
    const myCloud = await cloudinary.v2.uploader.upload(req.body.image, {
      folder: "portfolio",
      width: 150,
      crop: "scale",
    });
    const { name } = req.body;
    const skill = await Skills.create({
      image: {
        public_id: myCloud.public_id,
        url: myCloud.secure_url,
      },
      name
    });
    res.status(201).json({
      success: true,
      skill
    })
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message
    })
  }
}

// get skills of home page 
exports.getSkills = async (req, res) => {
  try {
    const skills = await Skills.find();
    res.status(200).json({
      success: true,
      skills
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message
    });

  }
}