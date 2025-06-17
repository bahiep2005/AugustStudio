const express = require('express');
const router = express.Router();
const sql = require('mssql');
const { sqlConfig } = require('../config/database');
const nodemailer = require('nodemailer');
const twilio = require('twilio');

// Hàm gửi SMS
const sendSMS = async (to, message) => {
  try {
    const client = twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN);
    await client.messages.create({
      body: message,
      from: process.env.TWILIO_PHONE,
      to: to
    });
    console.log('Đã gửi SMS đến', to);
    return true;
  } catch (err) {
    console.error('Gửi SMS thất bại:', err.message);
    return false;
  }
};

// Hàm gửi email
const sendEmail = async (to, subject, text) => {
  try {
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS
      }
    });
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: to,
      subject: subject,
      text: text
    });
    console.log('Đã gửi email đến', to);
    return true;
  } catch (err) {
    console.error('Gửi email thất bại:', err.message);
    return false;
  }
};

router.post('/', async (req, res) => {
  console.log('Nhận request booking:', req.body);
  const { name, phone, service, date, time, email, username, staff } = req.body;
  let pool;
  
  try {
    pool = await sql.connect(sqlConfig);
    console.log('Kết nối SQL thành công, chuẩn bị insert...');
    
    // Insert booking vào database
    await pool.request()
      .input('name', sql.NVarChar, name)
      .input('phone', sql.VarChar, phone)
      .input('service', sql.NVarChar, service)
      .input('date', sql.Date, date)
      .input('time', sql.VarChar, time)
      .input('email', sql.VarChar, email)
      .input('username', sql.VarChar, username)
      .input('staff', sql.NVarChar, staff)
      .query(`
        INSERT INTO Bookings (name, phone, service, date, time, email, username, staff) 
        VALUES (@name, @phone, @service, @date, @time, @email, @username, @staff)
      `);
    
    console.log('Insert booking thành công!');

    // Gửi thông báo cho khách hàng
    const customerMessage = `August Studio: Đặt lịch thành công cho ${name} - dịch vụ ${service} ngày ${date} lúc ${time}. Cảm ơn bạn đã lựa chọn chúng tôi!`;
    await sendSMS(phone, customerMessage);
    await sendEmail(email, 'Xác nhận đặt lịch August Studio', customerMessage);

    // Gửi thông báo cho admin
    const adminMessage = `August Studio - Đặt lịch mới:\nKhách hàng: ${name}\nDịch vụ: ${service}\nNgày: ${date}\nGiờ: ${time}\nSĐT: ${phone}\nEmail: ${email}`;
    await sendSMS(process.env.ADMIN_PHONE, adminMessage);
    await sendEmail(process.env.ADMIN_EMAIL, 'Thông báo đặt lịch mới - August Studio', adminMessage);

    res.json({ 
      message: 'Đặt lịch thành công!',
      notification: {
        sms: true,
        email: true
      }
    });
  } catch (err) {
    console.error('Lỗi máy chủ khi booking:', err);
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