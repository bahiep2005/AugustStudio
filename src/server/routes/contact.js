const express = require('express');
const router = express.Router();
const sql = require('mssql');
const { connectDB } = require('../config/database');

// POST /api/contact - Gửi form liên hệ
router.post('/', async (req, res) => {
  try {
    const { name, phone, email, message } = req.body;
    
    // Validate input
    if (!name || !phone || !email || !message) {
      return res.status(400).json({
        message: 'Vui lòng điền đầy đủ thông tin'
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        message: 'Email không hợp lệ'
      });
    }

    // Validate phone format (Vietnamese phone number)
    const phoneRegex = /^[0-9]{10,11}$/;
    if (!phoneRegex.test(phone.replace(/\s/g, ''))) {
      return res.status(400).json({
        message: 'Số điện thoại không hợp lệ'
      });
    }

    const pool = await connectDB();
    
    // Insert contact message vào database
    const result = await pool.request()
      .input('name', sql.NVarChar, name.trim())
      .input('phone', sql.NVarChar, phone.trim())
      .input('email', sql.NVarChar, email.trim().toLowerCase())
      .input('message', sql.NText, message.trim())
      .input('created_at', sql.DateTime, new Date())
      .query(`
        INSERT INTO ContactMessages (name, phone, email, message, created_at)
        VALUES (@name, @phone, @email, @message, @created_at);
        
        SELECT SCOPE_IDENTITY() as id;
      `);

    res.status(201).json({
      message: 'Tin nhắn của bạn đã được gửi thành công!',
      id: result.recordset[0].id
    });

  } catch (err) {
    console.error('Lỗi khi gửi tin nhắn liên hệ:', err);
    res.status(500).json({
      message: 'Có lỗi xảy ra khi gửi tin nhắn. Vui lòng thử lại sau!'
    });
  }
});

// GET /api/contact - Lấy danh sách tin nhắn liên hệ (cho admin)
router.get('/', async (req, res) => {
  try {
    const pool = await connectDB();
    
    const result = await pool.request()
      .query(`
        SELECT id, name, phone, email, message, created_at
        FROM ContactMessages
        ORDER BY created_at DESC
      `);

    res.json({
      messages: result.recordset
    });

  } catch (err) {
    console.error('Lỗi khi lấy danh sách tin nhắn:', err);
    res.status(500).json({
      message: 'Có lỗi xảy ra khi lấy danh sách tin nhắn'
    });
  }
});

module.exports = router; 