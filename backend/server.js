const app = require('./app');
const databaseConnection = require('./config/database');
const cloudinary = require('cloudinary');

// accessing dotenv variable
if (process.env.NODE_ENV !== 'PRODUCTION') {
  require('dotenv').config({ path: "backend/config/config.env" });
}
// require('dotenv').config({ path: "backend/config/config.env" });

databaseConnection();

// Configuration 
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_KEY,
  api_secret: process.env.CLOUD_SECRET
});

// starting server 
app.listen(process.env.PORT_NUMBER, () => {
  console.log(`server is running on port: ${process.env.PORT_NUMBER}`)
})
