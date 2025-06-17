import React, { useState } from "react";
import "../components/main/styles.css";
import logo from "../assets/logo/august-logo-den.png";

// Không dùng useNavigate, dùng window.location
const RegisterPage = ({ onSwitchToLogin }) => {
  const [form, setForm] = useState({ username: "", password: "", confirm: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
    setSuccess("");
  };

  const handleRegister = async e => {
    e.preventDefault();
    if (!form.username || !form.password || !form.confirm) {
      setError("Vui lòng nhập đầy đủ thông tin.");
      return;
    }
    if (form.password !== form.confirm) {
      setError("Mật khẩu xác nhận không khớp.");
      return;
    }
    setLoading(true);
    setError("");
    setSuccess("");
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: form.username, password: form.password })
      });
      const data = await response.json();
      if (!response.ok) {
        setError(data.message || 'Đăng ký thất bại.');
        setLoading(false);
        return;
      }
      // Lưu username vào localStorage
      localStorage.setItem('username', form.username);
      setSuccess('Đăng ký thành công!');
      setForm({ username: '', password: '', confirm: '' });
      setTimeout(() => {
        window.location.href = '/';
      }, 1000);
    } catch (err) {
      setError('Không thể kết nối tới máy chủ.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <img src={logo} alt="August Studio Logo" style={{ width: 150, margin: "0 auto 24px", display: "block" }} />
      <h2>Đăng Ký</h2>
      <form className="auth-form" onSubmit={handleRegister} autoComplete="off">
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
        <input
          type="password"
          name="confirm"
          placeholder="Xác nhận mật khẩu"
          value={form.confirm}
          onChange={handleChange}
          className="auth-input"
          required
        />
        {error && <div className="auth-error">{error}</div>}
        {success && <div className="auth-success">{success}</div>}
        {loading && <div className="auth-loading">Đang gửi yêu cầu...</div>}
        <button type="submit" className="auth-btn">Đăng ký</button>
      </form>
      <div style={{ margin: '16px 0', textAlign: 'center', display: 'flex', justifyContent: 'center', gap: 16 }}>
        <button
          className="auth-btn social-btn social-icon-btn"
          style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
          title="Đăng ký qua Facebook"
          onClick={() => alert('Chức năng đăng ký qua Facebook chưa được tích hợp!')}
        >
          <img src={require('../assets/icons/facebook.png')} alt="Facebook" style={{ width: 36, height: 36 }} />
        </button>
        <button
          className="auth-btn social-btn social-icon-btn"
          style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
          title="Đăng ký qua Google"
          onClick={() => alert('Chức năng đăng ký qua Google chưa được tích hợp!')}
        >
          <img src={require('../assets/icons/google.png')} alt="Google" style={{ width: 36, height: 36 }} />
        </button>
        <button
          className="auth-btn social-btn social-icon-btn"
          style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
          title="Đăng ký qua Instagram"
          onClick={() => alert('Chức năng đăng ký qua Instagram chưa được tích hợp!')}
        >
          <img src={require('../assets/icons/instagram.png')} alt="Instagram" style={{ width: 36, height: 36 }} />
        </button>
      </div>
      <div className="auth-link">
        Đã có tài khoản?{" "}
        <button
          type="button"
          className="auth-link-btn"
          onClick={onSwitchToLogin}
        >
          Đăng nhập
        </button>
      </div>
    </div>
  );
};

export default RegisterPage;

/* Thêm vào cuối file hoặc trong file CSS:
.social-icon-btn:hover {
  background: #CCC9F8 !important;
  border-radius: 50%;
}
*/