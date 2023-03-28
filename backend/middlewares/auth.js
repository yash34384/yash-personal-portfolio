const jwt = require('jsonwebtoken');
const Login = require('../models/LoginModel');

exports.isAuthUser = async (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    return res.status(401).json({
      success: false,
      message: 'Login to access this resource'
    })
  }
  const decodedData = jwt.verify(token, process.env.JWT_SECRET);
  req.user = await Login.findById(decodedData.id);
  next();
}