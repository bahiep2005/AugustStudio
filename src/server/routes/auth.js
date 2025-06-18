const express = require('express');
const router = express.Router();
const sql = require('mssql');
const { sqlConfig } = require('../config/database');

// Đăng ký
router.post('/register', async (req, res) => {
  console.log("Register Request Body:", req.body);
  const { username, email, password, confirmPassword } = req.body;
  if (!username || !email || !password || !confirmPassword) {
    return res.status(400).json({ message: "Vui lòng nhập đầy đủ thông tin!" });
  }
  
  if (req.body.password !== req.body.confirmPassword) {
    return res.status(400).json({ message: "Mật khẩu xác nhận không khớp" });
  }
  
  let pool;
  try {
    pool = await sql.connect(sqlConfig);
    const result = await pool.request()
      .input('username', sql.VarChar, username)
      .query('SELECT * FROM Users WHERE username = @username');
      
    if (result.recordset.length > 0) {
      return res.status(400).json({ message: 'Tên đăng nhập đã tồn tại.' });
    }

    await pool.request()
      .input('username', sql.VarChar, username)
      .input('password', sql.VarChar, password)
      .input('email', sql.VarChar, email)
      .query('INSERT INTO Users (username, password, email) VALUES (@username, @password, @email)');
      
    res.json({ message: 'Đăng ký thành công!' });
  } catch (err) {
    console.error('Register error:', err);
    res.status(500).json({ 
      message: 'Lỗi máy chủ.', 
      error: process.env.NODE_ENV === 'development' ? err.message : 'Internal server error'
    });
  } finally {
    if (pool) {
      try {
        await pool.close();
      } catch (err) {
        console.error('Error closing pool:', err);
      }
    }
  }
});

// Đăng nhập
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ message: 'Thiếu thông tin.' });
  }
  
  let pool;
  try {
    pool = await sql.connect(sqlConfig);
    const result = await pool.request()
      .input('username', sql.VarChar, username)
      .input('password', sql.VarChar, password)
      .query('SELECT * FROM Users WHERE username = @username AND password = @password');
      
    if (result.recordset.length === 0) {
      return res.status(401).json({ message: 'Sai tên đăng nhập hoặc mật khẩu.' });
    }
    
    res.json({ message: 'Đăng nhập thành công!', token: 'dummy-token' });
  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ 
      message: 'Lỗi máy chủ.', 
      error: process.env.NODE_ENV === 'development' ? err.message : 'Internal server error'
    });
  } finally {
    if (pool) {
      try {
        await pool.close();
      } catch (err) {
        console.error('Error closing pool:', err);
      }
    }
  }
});

module.exports = router; 