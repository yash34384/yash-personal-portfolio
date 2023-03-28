const express = require('express');
const { getHome, createHome, createSkills, getSkills } = require('../controllers/HomeController');
const { isAuthUser } = require('../middlewares/auth');

const router = express.Router();

router.route('/home').get(getHome).post(isAuthUser, createHome);
router.route('/home/skills').get(getSkills).post(isAuthUser, createSkills);

module.exports = router;