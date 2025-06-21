# Back to Top Button Demo

## Mô tả
Nút "Back to Top" đã được thêm vào ứng dụng August Studio với các tính năng sau:

## Tính năng

### 1. **Hiển thị thông minh**
- Nút chỉ xuất hiện khi cuộn xuống quá 300px từ đầu trang
- Tự động ẩn khi cuộn lên đầu trang
- Animation mượt mà khi xuất hiện/biến mất

### 2. **Thiết kế đẹp mắt**
- Hình tròn với gradient màu tím (#CCC9F8 → #9B8FFF)
- Mũi tên trắng hướng lên (↑)
- Box shadow tạo hiệu ứng nổi
- Hover effect với màu đậm hơn

### 3. **Tương tác mượt mà**
- **Cuộn từ từ mượt mà**: Sử dụng easing function cubic để tạo hiệu ứng cuộn tự nhiên
- **Thời gian cuộn**: 1 giây với animation mượt mà
- Hover effect: nút nổi lên và mũi tên di chuyển
- Active state khi click

### 4. **Responsive Design**
- Desktop: 50x50px, bottom-right 30px
- Tablet: 45x45px, bottom-right 20px  
- Mobile: 40x40px, bottom-right 15px

## Cách test

1. **Khởi động ứng dụng:**
   ```bash
   cd august
   npm start
   ```

2. **Test nút Back to Top:**
   - Cuộn xuống trang (quá 300px)
   - Nút sẽ xuất hiện ở góc phải dưới
   - Click nút để cuộn từ từ lên đầu trang (1 giây)
   - Cuộn lên đầu trang, nút sẽ biến mất

3. **Test responsive:**
   - Thay đổi kích thước màn hình
   - Nút sẽ tự động điều chỉnh kích thước

## Code Implementation

### React Component với Animation Mượt Mà
```jsx
const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    // Cuộn từ từ lên đầu trang với animation mượt mà
    const startPosition = window.pageYOffset;
    const duration = 1000; // Thời gian cuộn (1 giây)
    const startTime = performance.now();

    const easeInOutCubic = (t) => {
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    };

    const animateScroll = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Sử dụng easing function để tạo hiệu ứng mượt mà
      const easeProgress = easeInOutCubic(progress);
      const currentPosition = startPosition - (startPosition * easeProgress);
      
      window.scrollTo(0, currentPosition);
      
      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  };

  return (
    <>
      {isVisible && (
        <button
          className="back-to-top-btn"
          onClick={scrollToTop}
          aria-label="Cuộn lên đầu trang"
        >
          <span className="back-to-top-arrow">↑</span>
        </button>
      )}
    </>
  );
};
```

### CSS Styling
```css
.back-to-top-btn {
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #CCC9F8 0%, #9B8FFF 100%);
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  z-index: 1000;
  animation: slideInUp 0.3s ease forwards;
}
```

## Hiệu ứng Cuộn Mượt Mà

### Easing Function
Sử dụng `easeInOutCubic` để tạo hiệu ứng cuộn tự nhiên:
- **Bắt đầu chậm**: Tăng tốc độ dần dần
- **Giữa nhanh**: Tốc độ cao nhất ở giữa
- **Kết thúc chậm**: Giảm tốc độ dần dần

### Thời gian Cuộn
- **Duration**: 1000ms (1 giây)
- **RequestAnimationFrame**: Đảm bảo 60fps mượt mà
- **Progress calculation**: Tính toán vị trí chính xác

## Lưu ý

- Nút có z-index: 1000 để luôn hiển thị trên các element khác
- Sử dụng easing function cubic cho trải nghiệm tự nhiên
- Có aria-label cho accessibility
- Animation slideInUp tạo hiệu ứng xuất hiện đẹp mắt
- Responsive design đảm bảo hoạt động tốt trên mọi thiết bị
- **Cuộn từ từ**: Không còn cuộn thẳng lên mà cuộn mượt mà trong 1 giây 