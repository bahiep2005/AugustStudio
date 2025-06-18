# August Studio - Website Đặt Lịch Làm Đẹp

Website đặt lịch làm đẹp cho August Studio, cho phép khách hàng đặt lịch các dịch vụ làm đẹp trực tuyến.

## Tính năng chính

- Đăng ký và đăng nhập tài khoản
- Xem thông tin các dịch vụ
- Đặt lịch làm đẹp
- Nhận thông báo xác nhận qua email và SMS
- Quản lý lịch hẹn

## Công nghệ sử dụng

### Frontend
- React.js
- Material-UI
- Bootstrap
- Styled Components

### Backend
- Node.js
- Express.js
- SQL Server
- Twilio (SMS)
- Nodemailer (Email)

## Cài đặt

1. Clone repository:
```bash
git clone [repository-url]
cd august
```

2. Cài đặt dependencies:
```bash
npm install
```

3. Tạo file .env và cấu hình các biến môi trường:
```
PORT=5001
NODE_ENV=development

# Database Configuration
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_NAME=your_db_name
DB_SERVER=your_db_server

# Email Configuration
GMAIL_USER=your_gmail
GMAIL_PASS=your_app_password

# Twilio Configuration
TWILIO_SID=your_twilio_sid
TWILIO_AUTH_TOKEN=your_twilio_auth_token
TWILIO_PHONE=your_twilio_phone

REACT_APP_API_URL=https://your-backend.onrender.com
```

4. Chạy ứng dụng:
```bash
# Chạy cả frontend và backend
npm run dev

# Chỉ chạy backend
npm run server

# Chỉ chạy frontend
npm start
```

## Cấu trúc thư mục

```
august/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── layouts/
│   └── server/
│       ├── config/
│       └── routes/
├── .env
├── .gitignore
├── package.json
└── README.md
```

## Đóng góp

Mọi đóng góp đều được hoan nghênh. Vui lòng tạo issue hoặc pull request để đóng góp.

## Giấy phép

MIT License 