const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

// Home route
app.get('/', (req, res) => {
  res.send('Hello from Express on Heroku!');
});

// About route
app.get('/about', (req, res) => {
  res.send('This is the About Us page.');
});

// Contact route
app.get('/contact', (req, res) => {
  res.send('This is the Contact Us page.');
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});