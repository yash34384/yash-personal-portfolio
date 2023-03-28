const express = require('express');
const { getResume, createResume } = require('../controllers/ResumeController');
const { isAuthUser } = require('../middlewares/auth');

const router = express.Router();

router.route('/resume').get(getResume).post(isAuthUser, createResume);

module.exports = router;