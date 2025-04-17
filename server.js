const express = require('express');  // Import the Express library
const path = require('path');  // Import path utility to handle file paths

const app = express();
const PORT = process.env.PORT || 3000;  // Use the port specified by the environment or 3000 for local development

// Serve static files from the 'assets' folder (CSS, JS, images, etc.)
app.use('/ec/assets', express.static(path.join(__dirname, 'assets')));

// Serve the 'index.html' file when the root route '/ec' is accessed
app.get('/ec', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));  // Path to index.html
});

// Define other routes with '/ec' prefix
app.get('/ec/about', (req, res) => {
  res.send('This is the About Us page.');
});

app.get('/ec/contact', (req, res) => {
  res.send('This is the Contact Us page.');
});

// Start the server on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});