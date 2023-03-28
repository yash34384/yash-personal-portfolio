const Login = require('../models/LoginModel');
const sendToken = require('../middlewares/jwttoken');

// create account 
exports.createLogin = async (req, res) => {
  try {
    const login = await Login.create(req.body);
    sendToken(login, 201, res);
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message
    })
  }
}

// login to account 
exports.login = async (req, res) => {
  try {
    const { user, password } = req.body;
    if (!password || !user) {
      return res.status(400).json({
        success: false,
        message: 'Please enter user name or password'
      })
    }
    const data = await Login.findOne({ user }).select({ password });
    if (!data) {
      return res.status(401).json({
        success: false,
        message: 'Please enter valid user name or password'
      })
    }
    const isMatched = data.comparePassword(password);
    if (!isMatched) {
      return res.status(401).json({
        success: false,
        message: 'Please enter valid user name or password'
      })
    }
    sendToken(data, 201, res);
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Please enter valid user name or password'
    })
  }
}

// logout user 
exports.logout = async (req, res) => {
  try {
    res.cookie("token", null, {
      expires: new Date(Date.now()),
      httpOnly: true,
    });
    res.status(200).json({
      success: true,
      message: 'Logged Out'
    })
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message
    })
  }
}