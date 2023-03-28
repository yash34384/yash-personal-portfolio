const express = require('express');
const { createLogin, login, logout } = require('../controllers/LoginController');
const { isAuthUser } = require('../middlewares/auth');

const router = express.Router();

router.route('/register').post(isAuthUser, createLogin);
router.route('/login').post(login);
router.route('/logout').get(logout);

module.exports = router;