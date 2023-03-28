const express = require('express');
const { getAbout, createAbout } = require('../controllers/AboutController');
const { isAuthUser } = require('../middlewares/auth');

const router = express.Router();

router.route('/about').get(getAbout).post(isAuthUser, createAbout);

module.exports = router;