const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

const Product = require('./models/Product');
const User = require('./models/User');

// Serve static files from /ec/assets
app.use('/ec/assets', express.static(path.join(__dirname, 'assets')));

// Redirect root route to /ec
app.get('/', (req, res) => {
  res.redirect('/ec');
});

// Serve index.html at /ec
app.get('/ec', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Other routes
app.get('/ec/about', (req, res) => {
  res.send('About page');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
// Get all products
app.get('/ec/api/products', async (req, res) => {
  try {
    const products = await Product.getAllProducts();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// User registration
app.post('/ec/api/register', express.json(), async (req, res) => {
  try {
    const { username, email, password } = req.body;
    // Add password hashing (use bcrypt in real apps)
    const user = await User.createUser(username, email, password);
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});