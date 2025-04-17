const pool = require('../database/db');

class Product {
  static async getAllProducts() {
    const res = await pool.query('SELECT * FROM products');
    return res.rows;
  }

  static async getProductById(id) {
    const res = await pool.query('SELECT * FROM products WHERE id = $1', [id]);
    return res.rows[0];
  }
}

module.exports = Product;