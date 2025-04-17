const express = require('express');
const app = express();

// Define the port to listen on
const PORT = process.env.PORT || 3000;

// Define route handlers
const handleHome = (req, res) => {
  res.send('Hello from Express on Heroku!');
};

const handleAbout = (req, res) => {
  res.send('This is the About Us page.');
};

const handleContact = (req, res) => {
  res.send('This is the Contact Us page.');
};

// Define routes
app.get('/', handleHome);
app.get('/about', handleAbout);
app.get('/contact', handleContact);

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});