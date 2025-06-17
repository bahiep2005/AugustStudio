import React, { useEffect, useState } from 'react';
import '../components/header/Header.css';
import loginIcon from '../assets/icons/user.png';
import registerIcon from '../assets/icons/people.png';

// Logo Component
const Logo = ({ width = 150, marginLeft = 60, white = false }) => {
  const logoSrc = white
    ? require('../assets/logo/august-logo-trang.png')
    : require('../assets/logo/august-logo-den.png');
  return (
    <img
      src={logoSrc}
      alt="August Studio Logo"
      width={width}
      style={{ objectFit: 'contain', display: 'block', marginLeft }}
    />
  );
};

// Menu Component
const menuItems = [
  { key: 'home', label: 'Trang Chủ' },
  { key: 'about', label: 'Giới Thiệu' },
  { key: 'blog', label: 'Mới' },
  { key: 'services', label: 'Dịch Vụ' },
  { key: 'contact', label: 'Liên Hệ' },
];

const Menu = ({ active, onChange, white, username, onLogout }) => {
  const [showLogout, setShowLogout] = useState(false);

  const handleUserClick = () => {
    setShowLogout((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.user-menu')) setShowLogout(false);
    };
    if (showLogout) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showLogout]);

  return (
    <nav className={`menu${white ? ' menu-white' : ''}`}>
      {menuItems.map(item => (
        <button
          key={item.key}
          className={`menu-item${active === item.key ? ' active' : ''}`}
          onClick={() => onChange(item.key)}
        >
          {item.label}
        </button>
      ))}
      {username ? (
        <div className="user-menu" style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: 8, marginLeft: 16 }}>
          <button onClick={handleUserClick} style={{ background: 'none', border: 'none', display: 'flex', alignItems: 'center', cursor: 'pointer', padding: 0 }}>
            <img src={loginIcon} alt="User" className="menu-icon" style={{ width: 28, height: 28, filter: white ? 'brightness(0) invert(1)' : 'none' }} />
            <span style={{ fontWeight: 600, marginLeft: 4, color: white ? '#fff' : '#222' }}>{username}</span>
          </button>
          {showLogout && (
            <button
              className="menu-btn"
              onClick={onLogout}
              style={{ position: 'absolute', top: 36, right: 0, zIndex: 10 }}
            >
              Đăng xuất
            </button>
          )}
        </div>
      ) : (
        <>
          <button
            className={`menu-btn${active === 'login' ? ' active' : ''}`}
            onClick={() => onChange('login')}
          >
            <img src={loginIcon} alt="Đăng nhập" className="menu-icon" />
            Đăng nhập
          </button>
          <button
            className={`menu-btn${active === 'register' ? ' active' : ''}`}
            onClick={() => onChange('register')}
          >
            <img src={registerIcon} alt="Đăng ký" className="menu-icon" />
            Đăng ký
          </button>
        </>
      )}
    </nav>
  );
};

// Header Component
const Header = ({ activePage, setActivePage }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setUsername(localStorage.getItem('username') || "");
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleMenuClick = (key) => {
    setActivePage(key);
    setMobileMenuOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('username');
    localStorage.removeItem('token');
    setUsername("");
    window.location.reload();
  };

  return (
    <header className={`header${scrolled ? ' header-scrolled' : ''}`}>
      <div className="header-row" id='header-main'>
        <div className="header-col">
          <Logo white={scrolled} />
        </div>
        <div className="header-col header-menu">
          <Menu active={activePage} onChange={handleMenuClick} white={scrolled} username={username} onLogout={handleLogout} />
        </div>
        <button 
          className={`hamburger${mobileMenuOpen ? ' active' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </div>
      <div className={`mobile-menu${mobileMenuOpen ? ' active' : ''}`}>
        <Menu active={activePage} onChange={handleMenuClick} white={true} username={username} onLogout={handleLogout} />
      </div>
    </header>
  );
};

export default Header;
