# Contact Form - August Studio

## Mô tả
Form liên hệ đã được tích hợp với SQL Server để lưu trữ tin nhắn từ khách hàng.

## Cài đặt Database

### 1. Tạo bảng ContactMessages
Chạy script SQL trong file `src/server/config/create_contact_table.sql` để tạo bảng:

```sql
-- Kết nối vào SQL Server Management Studio
-- Chọn database NewAugustDB
-- Chạy toàn bộ nội dung file create_contact_table.sql
```

### 2. Cấu trúc bảng
Bảng `ContactMessages` bao gồm các cột:
- `id`: ID tự động tăng (Primary Key)
- `name`: Họ tên khách hàng (NVARCHAR(100))
- `phone`: Số điện thoại (NVARCHAR(20))
- `email`: Email (NVARCHAR(100))
- `message`: Nội dung tin nhắn (NTEXT)
- `created_at`: Thời gian tạo (DATETIME)
- `is_read`: Trạng thái đã đọc (BIT)
- `is_replied`: Trạng thái đã trả lời (BIT)

## API Endpoints

### POST /api/contact
Gửi tin nhắn liên hệ mới

**Request Body:**
```json
{
  "name": "Nguyễn Văn A",
  "phone": "0984131928",
  "email": "example@email.com",
  "message": "Nội dung tin nhắn"
}
```

**Response:**
```json
{
  "message": "Tin nhắn của bạn đã được gửi thành công!",
  "id": 1
}
```

### GET /api/contact
Lấy danh sách tin nhắn liên hệ (cho admin)

**Response:**
```json
{
  "messages": [
    {
      "id": 1,
      "name": "Nguyễn Văn A",
      "phone": "0984131928",
      "email": "example@email.com",
      "message": "Nội dung tin nhắn",
      "created_at": "2024-01-01T10:00:00.000Z"
    }
  ]
}
```

## Tính năng

### Frontend (React)
- Form validation cho email và số điện thoại
- Loading state khi gửi tin nhắn
- Thông báo thành công/lỗi
- Disable form khi đang gửi
- Reset form sau khi gửi thành công

### Backend (Node.js/Express)
- Validation dữ liệu đầu vào
- Xử lý lỗi và response phù hợp
- Kết nối SQL Server an toàn
- Logging lỗi chi tiết

## Validation Rules

### Email
- Phải có định dạng email hợp lệ
- Ví dụ: `user@domain.com`

### Số điện thoại
- Phải có 10-11 chữ số
- Ví dụ: `0984131928`, `0123456789`

### Các trường khác
- Tất cả trường đều bắt buộc
- Tên và số điện thoại sẽ được trim khoảng trắng
- Email sẽ được chuyển thành lowercase

## Cách sử dụng

1. **Khởi động server:**
   ```bash
   cd august/src/server
   npm start
   ```

2. **Truy cập form liên hệ:**
   - Vào trang Contact trong ứng dụng
   - Điền đầy đủ thông tin
   - Nhấn "Gửi tin nhắn"

3. **Kiểm tra tin nhắn:**
   - Gọi API `GET /api/contact` để xem danh sách tin nhắn
   - Hoặc truy cập trực tiếp database

## Troubleshooting

### Lỗi kết nối database
- Kiểm tra thông tin kết nối trong `database.js`
- Đảm bảo SQL Server đang chạy
- Kiểm tra firewall và network

### Lỗi validation
- Kiểm tra định dạng email và số điện thoại
- Đảm bảo tất cả trường đều được điền

### Lỗi server
- Kiểm tra log trong console
- Đảm bảo tất cả dependencies đã được cài đặt
- Kiểm tra port 5001 có đang được sử dụng không 