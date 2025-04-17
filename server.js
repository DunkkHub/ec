const express = require('express');
const path = require('path');
const Product = require('./database/models/Product'); // Use correct path
const User = require('./database/models/User');       // Use correct path

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use('/ec/assets', express.static(path.join(__dirname, 'assets')));
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.redirect('/ec');
});

app.get('/ec', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/ec/about', (req, res) => {
  res.send('About page');
});

app.get('/ec/api/products', async (req, res) => {
  try {
    const products = await Product.getAllProducts();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/ec/api/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;
    // Add password hashing here (use bcrypt)
    const user = await User.createUser(username, email, password);
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});