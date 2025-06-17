require('dotenv').config();
const axios = require('axios');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const sql = require('mssql');

const app = express();
app.use(cors());
app.use(express.json());

// Cấu hình kết nối SQL Server
const sqlConfig = {
  user: 'sa', // thêm user SQL Server
  password: 'Hieppc123@', // thêm mật khẩu SQL Server
  database: 'NewAugustDB', // tên database đã tạo
  server: 'ADMIN-PC', // hoặc 'localhost' nếu dùng default instance
  options: {
    encrypt: false,
    trustServerCertificate: true
  }
};

// Kết nối SQL Server
sql.connect(sqlConfig).then(() => {
  console.log('Kết nối SQL Server thành công!');
}).catch(err => {
  console.error('Kết nối SQL Server thất bại:', err.message);
});

// API Đặt lịch
app.post('/api/booking', async (req, res) => {
  console.log('Nhận request booking:', req.body); // Log dữ liệu nhận được
  // Lấy duy nhất mỗi trường 1 lần, tránh lỗi lặp key
  const { name, phone, service, date, time, email, username, staff } = req.body;
  try {
    await sql.connect(sqlConfig);
    console.log('Kết nối SQL thành công, chuẩn bị insert...');
    await sql.query`INSERT INTO Bookings (name, phone, service, date, time, email, username, staff) VALUES (${name}, ${phone}, ${service}, ${date}, ${time}, ${email}, ${username}, ${staff})`;
    console.log('Insert booking thành công!');
    // Gửi email xác nhận
    try {
      const nodemailer = require('nodemailer');
      let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.GMAIL_USER, // Đặt biến môi trường
          pass: process.env.GMAIL_PASS
        }
      });
      await transporter.sendMail({
        from: process.env.GMAIL_USER,
        to: email,
        subject: 'Xác nhận đặt lịch August Studio',
        text: `Chào ${name}, bạn đã đặt lịch dịch vụ ${service} vào ngày ${date} lúc ${time}. Cảm ơn bạn!`
      });
      console.log('Đã gửi email xác nhận đến', email);
    } catch (mailErr) {
      console.error('Gửi email thất bại:', mailErr.message);
    }
    // Gửi SMS xác nhận
    try {
      const twilio = require('twilio');
      const client = twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN);
      await client.messages.create({
        body: `August Studio: Đặt lịch thành công cho ${name} - dịch vụ ${service} ngày ${date} lúc ${time}.`,
        from: process.env.TWILIO_PHONE, // Số điện thoại Twilio
        to: phone // Số điện thoại khách hàng
      });
      console.log('Đã gửi SMS xác nhận đến', phone);
    } catch (smsErr) {
      console.error('Gửi SMS thất bại:', smsErr.message);
    }
    res.json({ message: 'Đặt lịch thành công!' });
  } catch (err) {
    console.error('Lỗi máy chủ khi booking:', err); // Log chi tiết lỗi
    res.status(500).json({ message: 'Lỗi máy chủ.', error: err.message });
  }
});

// API Đăng ký
app.post('/api/register', async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ message: 'Thiếu thông tin.' });
  }
  try {
    await sql.connect(sqlConfig);
    const result = await sql.query`SELECT * FROM Users WHERE username = ${username}`;
    if (result.recordset.length > 0) {
      return res.status(400).json({ message: 'Tên đăng nhập đã tồn tại.' });
    }
    await sql.query`INSERT INTO Users (username, password) VALUES (${username}, ${password})`;
    res.json({ message: 'Đăng ký thành công!' });
  } catch (err) {
    console.error('Register error:', err); // In lỗi chi tiết ra terminal
    res.status(500).json({ message: 'Lỗi máy chủ.', error: err.message });
  }
});

// API Đăng nhập
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ message: 'Thiếu thông tin.' });
  }
  try {
    await sql.connect(sqlConfig);
    const result = await sql.query`SELECT * FROM Users WHERE username = ${username} AND password = ${password}`;
    if (result.recordset.length === 0) {
      return res.status(401).json({ message: 'Sai tên đăng nhập hoặc mật khẩu.' });
    }
    // Trả về token giả lập (có thể thay bằng JWT nếu muốn)
    res.json({ message: 'Đăng nhập thành công!', token: 'dummy-token' });
  } catch (err) {
    console.error('Lỗi máy chủ:', err); // hoặc tương tự
    res.status(500).json({ message: 'Lỗi máy chủ.', error: err.message });
  }
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});