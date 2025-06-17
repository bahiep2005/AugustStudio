import React, { useState } from "react";
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
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      const data = await response.json();
      if (!response.ok) {
        setError(data.message || 'Đăng nhập thất bại.');
        setLoading(false);
        return;
      }
      // Lưu token và username vào localStorage
      if (data.token) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('username', form.username);
      }
      setTimeout(() => {
        window.location.href = '/';
      }, 500);
    } catch (err) {
      setError('Không thể kết nối tới máy chủ.');
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
        <button type="submit" className="auth-btn">Đăng nhập</button>
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