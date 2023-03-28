const express = require('express');
const { getProject, createProject } = require('../controllers/ProjectController');
const { isAuthUser } = require('../middlewares/auth');

const router = express.Router();

router.route('/project').get(getProject).post(isAuthUser, createProject);

module.exports = router;