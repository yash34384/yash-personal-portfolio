const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const path = require('path');

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());

const home = require('./routes/HomeRoute');
app.use("/api/v1", home);

const about = require('./routes/AboutRoute');
app.use("/api/v1", about);

const project = require('./routes/ProjectRoute');
app.use("/api/v1", project);

const resume = require('./routes/ResumeRoute');
app.use("/api/v1", resume);

const login = require('./routes/LoginRoute');
app.use("/api/v1", login);

app.use(express.static(path.join(__dirname, "../frontend/dist")));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../frontend/dist/index.html"));
})

module.exports = app;