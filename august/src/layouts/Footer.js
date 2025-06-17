import React from 'react';
import '../components/footer/Footer.css';

// Import icons
import logo from '../assets/logo/august-logo-den.png';
import facebookIcon from '../assets/icons/facebook.png';
import instagramIcon from '../assets/icons/instagram.png';
import tiktokIcon from '../assets/icons/tiktok.png';
import addressIcon from '../assets/icons/home-icon-silhouette.png';
import phoneIcon from '../assets/icons/telephone.png';
import mailIcon from '../assets/icons/mail.png';

// FooterSocial Component
const socialLinks = [
  { icon: facebookIcon, alt: 'Facebook', url: 'https://www.facebook.com/share/16NzxgifZR/?mibextid=wwXIfr' },
  { icon: instagramIcon, alt: 'Instagram', url: 'https://instagram.com' },
  { icon: tiktokIcon, alt: 'TikTok', url: 'https://tiktok.com' },
];

const FooterSocial = () => (
  <div className="footer-social">
    <div className="footer-social-logo-row">
      <img src={logo} alt="August Studio Logo" className="footer-social-logo" />
    </div>
    <div className="footer-social-icons-row">
      {socialLinks.map(link => (
        <a
          key={link.alt}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="footer-social-icon-link"
        >
          <img src={link.icon} alt={link.alt} className="footer-social-icon" />
        </a>
      ))}
    </div>
  </div>
);

// FooterServices Component
const services = [
  'Làm Tóc',
  'Làm Nail',
  'Làm Mi',
  'Gội Đầu',
];

const FooterServices = () => {
  const handleClick = () => {
    window.location.href = '/services';
  };

  return (
    <div className="services-list-container">
      <div className="services-list-title">Các Dịch Vụ</div>
      <ul className="services-list-ul">
        {services.map(service => (
          <li
            key={service}
            className="services-list-li"
            onClick={handleClick}
          >
            {service}
          </li>
        ))}
      </ul>
    </div>
  );
};

// FooterInfo Component
const infoList = [
  {
    icon: addressIcon,
    alt: 'Address',
    text: 'August Studio, phường Đông Ngàn, Từ Sơn, Bắc Ninh',
  },
  {
    icon: phoneIcon,
    alt: 'Phone',
    text: '0984131928',
    href: 'tel:0984131928',
  },
  {
    icon: mailIcon,
    alt: 'Email',
    text: 'bahiep13102005@gmail.com',
    href: 'mailto:bahiep13102005@gmail.com',
  },
];

const FooterInfo = () => (
  <div className="footer-info-container">
    <div className="footer-info-title">Thông tin Của Chúng Tôi</div>
    <ul className="footer-info-list">
      {infoList.map((item, idx) => (
        <li className="footer-info-item" key={item.alt}>
          <img
            src={item.icon}
            alt={item.alt}
            className="footer-info-icon"
          />
          {item.href ? (
            <a href={item.href} className="footer-info-link">{item.text}</a>
          ) : (
            <span className="footer-info-text">{item.text}</span>
          )}
        </li>
      ))}
    </ul>
  </div>
);

// Main Footer Component
const Footer = () => (
  <footer className="footer">
    <div className="footer-row footer-row-1">
      <div className="footer-col">
        <FooterSocial />
      </div>
      <div className="footer-col">
        <FooterServices />
      </div>
      <div className="footer-col">
        <FooterInfo />
      </div>
    </div>
    <div className="footer-row footer-row-2">
      <h6>Được thực hiện bởi <span>Nguyễn Bá Hoàng Hiệp</span></h6>
    </div>
  </footer>
);

export default Footer;
