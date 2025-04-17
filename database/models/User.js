const pool = require('../database/db');

class User {
  static async createUser(username, email, passwordHash) {
    const res = await pool.query(
      'INSERT INTO users (username, email, password_hash) VALUES ($1, $2, $3) RETURNING *',
      [username, email, passwordHash]
    );
    return res.rows[0];
  }
}

module.exports = User;