import React, { useState } from "react";
import axios from "axios";
import "../components/main/styles.css";
import logo from "../assets/logo/august-logo-den.png";

// Không dùng useNavigate, dùng window.location
const LoginPage = ({ onSwitchToRegister }) => {
  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const response = await axios.post('/api/auth/login', form);
      const data = response.data;
      
      // Lưu token và username vào localStorage
      if (data.token) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('username', form.username);
      }
      
      setTimeout(() => {
        window.location.href = '/';
      }, 500);
    } catch (err) {
      console.error('Login error:', err);
      if (err.response) {
        // Server trả về response với status code nằm ngoài range 2xx
        setError(err.response.data.message || 'Đăng nhập thất bại.');
      } else if (err.request) {
        // Request được gửi nhưng không nhận được response
        setError('Không thể kết nối tới máy chủ. Vui lòng kiểm tra lại kết nối mạng.');
      } else {
        // Có lỗi khi setting up request
        setError('Có lỗi xảy ra. Vui lòng thử lại sau.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <img src={logo} alt="August Studio Logo" style={{ width: 150, margin: "0 auto 24px", display: "block" }} />
      <h2>Đăng Nhập</h2>
      <form className="auth-form" onSubmit={handleLogin} autoComplete="off">
        <input
          type="text"
          name="username"
          placeholder="Tên đăng nhập"
          value={form.username}
          onChange={handleChange}
          className="auth-input"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Mật khẩu"
          value={form.password}
          onChange={handleChange}
          className="auth-input"
          required
        />
        {error && <div className="auth-error">{error}</div>}
        {loading && <div className="auth-loading">Đang gửi yêu cầu...</div>}
        <button type="submit" className="auth-btn" disabled={loading}>
          {loading ? 'Đang xử lý...' : 'Đăng nhập'}
        </button>
      </form>
      <div style={{ margin: '16px 0', textAlign: 'center', display: 'flex', justifyContent: 'center', gap: 16 }}>
        <button
          className="auth-btn social-btn social-icon-btn"
          style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
          title="Đăng nhập qua Facebook"
          onClick={() => alert('Chức năng đăng nhập qua Facebook chưa được tích hợp!')}
        >
          <img src={require('../assets/icons/facebook.png')} alt="Facebook" style={{ width: 36, height: 36 }} />
        </button>
        <button
          className="auth-btn social-btn social-icon-btn"
          style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
          title="Đăng nhập qua Google"
          onClick={() => alert('Chức năng đăng nhập qua Google chưa được tích hợp!')}
        >
          <img src={require('../assets/icons/google.png')} alt="Google" style={{ width: 36, height: 36 }} />
        </button>
        <button
          className="auth-btn social-btn social-icon-btn"
          style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
          title="Đăng nhập qua Instagram"
          onClick={() => alert('Chức năng đăng nhập qua Instagram chưa được tích hợp!')}
        >
          <img src={require('../assets/icons/instagram.png')} alt="Instagram" style={{ width: 36, height: 36 }} />
        </button>
      </div>
      <div className="auth-link">
        Chưa có tài khoản?{" "}
        <button
          type="button"
          className="auth-link-btn"
          onClick={onSwitchToRegister}
        >
          Đăng ký
        </button>
      </div>
    </div>
  );
};

export default LoginPage;

/* Thêm vào cuối file hoặc trong file CSS:
.social-icon-btn:hover {
  background: #CCC9F8 !important;
  border-radius: 50%;
}
*/