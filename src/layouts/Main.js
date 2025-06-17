import React, { useState, useRef, useEffect } from 'react';
import '../components/main/styles.css';  // Updated path to merged CSS file
import FadeInSection from '../components/main/FadeInSection';

// Import icons và images
import nailIcon from '../assets/icons/nail.png';
import keoIcon from '../assets/icons/keo.png';
import myIcon from '../assets/icons/my.png';
import manicureIcon from '../assets/icons/manicure.png';
import bannerImg from '../assets/images/banner1.jpg';
import mongImg from '../assets/images/mong.jpg';
import tocImg from '../assets/images/woman1.jpg';
import phoneIcon from '../assets/icons/telephone.png';
import mailIcon from '../assets/icons/mail.png';
import mapIcon from '../assets/icons/home-icon-silhouette.png';
import facebookIcon from '../assets/icons/facebook.png';
import instagramIcon from '../assets/icons/instagram.png';
import tiktokIcon from '../assets/icons/tiktok.png';
import hairIcon from '../assets/icons/like.png';
import nailsIcon from '../assets/icons/heart.png';
import skinIcon from '../assets/icons/sparkler.png';

// HomeBanner Component
const HomeBanner = ({ onExplore }) => (
  <FadeInSection>
    <div className="banner-bg" style={{ backgroundImage: `url(${bannerImg})` }}>
      <div className="banner-content">
        <div className="banner-title">
          Nâng Tầm Vẻ Đẹp Của Bạn: Nail & Tóc Đỉnh Cao Tại August Studio
        </div>
        <div className="banner-subtitle">
          Chào mừng bạn đến với August – nơi nghệ thuật làm nail và tóc được nâng tầm. Với đội ngũ chuyên gia giàu kinh nghiệm, không gian sang trọng và sản phẩm cao cấp, chúng tôi cam kết mang đến trải nghiệm làm đẹp thư giãn và kết quả hoàn hảo, giúp bạn tự tin thể hiện phong cách riêng.
        </div>
        <button className="banner-btn" onClick={onExplore}>
          Khám Phá Dịch Vụ <span className="arrow">→</span>
        </button>
      </div>
    </div>
  </FadeInSection>
);

// HomeShowcase Component
const showcaseServices = [
  {
    icon: nailIcon,
    title: 'Nail Nghệ Thuật',
    subtitle: 'Tạo nên những tác phẩm nghệ thuật độc đáo trên đôi tay bạn, từ phong cách tối giản đến cầu kỳ. kế móng sáng tạo, đa phong Tạo nên những tác phẩm nghệ thuật độc đáo trên đôi tay bạn, từ phong cách tối giản đến cầu kỳ.'
  },
  {
    icon: keoIcon,
    title: 'Kiểu Tóc Thời Thượng',
    subtitle: 'Luôn cập nhật xu hướng mới nhất, giúp bạn có mái tóc ưng ý, phản ánh cá tính.'
  },
  {
    icon: myIcon,
    title: 'Nối Mi Tự Nhiên',
    subtitle: 'Hàng mi cong vút, cuốn hút tự nhiên, không gây khó chịu.'
  },
  {
    icon: manicureIcon,
    title: 'Chăm Sóc Chuyên Sâu',
    subtitle: 'Nuôi dưỡng móng và tóc khỏe mạnh từ bên trong.'
  }
];

const HomeShowcase = () => (
  <FadeInSection>
    <div className="service-showcase">
      <h2 className="service-title">Biến hóa phong cách - tự tin tỏa sáng với dịch vụ làm đẹp đẳng cấp</h2>
      <div className="service-row">
        {showcaseServices.map((s, i) => (
          <div className="service-col" key={i}>
            <img src={s.icon} alt={s.title} className="service-icon" />
            <div className="service-col-title">{s.title}</div>
            <div className="service-col-subtitle">{s.subtitle}</div>
          </div>
        ))}
      </div>
    </div>
  </FadeInSection>
);

// HomeBlog Component
const HomeBlog = ({ onBlog }) => (
  <FadeInSection>
    <div className="home-blog">
      <div className="home-blog-col home-blog-img-col">
        <img src={mongImg} alt="Phong cách mới mẻ - Cute" className="home-blog-img" />
      </div>
      <div className="home-blog-col home-blog-content-col">
        <h3 className="home-blog-title">Phong Cách Mới Mẻ - Cute</h3>
        <div className="home-blog-subtitle">
          Nail phong cách mới mẻ, cute với màu pastel, họa tiết dễ thương, sáng tạo. Nail xinh, mới lạ với decal vui nhộn, màu sắc rực rỡ, trẻ trung, cá tính.
        </div>
        <button className="home-blog-btn" onClick={() => onBlog && onBlog()}>
          Tìm Hiểu Thêm <span className="arrow">→</span>
        </button>
      </div>
    </div>
  </FadeInSection>
);

// HomeHairBlog Component
const HomeHairBlog = ({ onBlog }) => (
  <FadeInSection>
    <div className="home-hair-blog">
      <div className="home-hair-blog-col home-hair-blog-content-col">
        <h3 className="home-hair-blog-title">Kiểu Tóc Thời Thượng - Quý Phái</h3>
        <div className="home-hair-blog-subtitle">
          Tóc quý phái, thời thượng, nhẹ nhàng kim, kiểu cắt tầng thanh lịch, cuốn hút.
        </div>
        <button className="home-hair-blog-btn" onClick={() => onBlog && onBlog()}>
          Tìm Hiểu Thêm <span className="arrow">→</span>
        </button>
      </div>
      <div className="home-hair-blog-col home-hair-blog-img-col">
        <img src={tocImg} alt="Kiểu Tóc Thời Thượng - Quý Phái" className="home-hair-blog-img" />
      </div>
    </div>
  </FadeInSection>
);

// HomeIntro Component
const HomeIntro = () => (
  <FadeInSection>
    <div className="home-intro">
      <h2 className="home-intro-title">Nơi Vẻ Đẹp Bắt Đầu</h2>
    </div>
  </FadeInSection>
);

// Home Page Component
const Home = ({ onExplore, onBlog }) => (
  <>
    <HomeBanner onExplore={onExplore} />
    <HomeShowcase />
    <HomeBlog onBlog={onBlog} />
    <HomeHairBlog onBlog={onBlog} />
    <HomeIntro />
  </>
);

// AboutBanner Component
const AboutBanner = () => (
  <FadeInSection>
    <div className="about-container">
      <span className="about-title">Giới Thiệu Về August Studio</span>
      <span className="about-subtitle">
        Khám phá câu chuyện, sứ mệnh và giá trị cốt lõi của chúng tôi
      </span>
    </div>
  </FadeInSection>
);

// StorySection Component Data
const leftContent = [
  {
    title: 'Câu chuyện của tiệm',
    subtitles: [
      'Ra đời từ niềm đam mê mãnh liệt với vẻ đẹp và nghệ thuật làm đẹp, August Studio được thành lập với sứ mệnh mang đến không chỉ những kiểu tóc thời thượng, những bộ móng nghệ thuật, mà còn là trải nghiệm thư giãn và nâng tầm phong cách sống cho mỗi khách hàng.',
      'Với 10 năm kinh nghiệm, chúng tôi tự hào là địa chỉ tin cậy được hàng ngàn khách hàng tại Từ Sơn - Bắc Ninh lựa chọn.'
    ]
  },
  {
    title: 'Sứ mệnh & Tầm nhìn',
    subtitles: [
      'Sứ mệnh: Mang đến dịch vụ làm đẹp chất lượng cao nhất, an toàn nhất, giúp khách hàng tự tin tỏa sáng với vẻ đẹp độc đáo của chính mình.',
      'Tầm nhìn: Trở thành tiệm nail và tóc hàng đầu, dẫn đầu xu hướng và được yêu mến bởi sự chuyên nghiệp, sáng tạo và tận tâm.'
    ]
  }
];

const rightContent = [
  {
    title: 'Giá trị cốt lõi',
    subtitles: [
      'Chất lượng: Sử dụng sản phẩm chính hãng, công nghệ tiên tiến và kỹ thuật chuyên nghiệp.',
      'Sáng tạo: Luôn cập nhật xu hướng mới, không ngừng đổi mới để mang đến những thiết kế độc đáo và phù hợp nhất.',
      'Tận tâm: Lắng nghe, thấu hiểu nhu cầu của khách hàng để tư vấn và phục vụ bằng cả trái tim.',
      'Vệ sinh & An toàn: Luôn đặt yếu tố vệ sinh tiệt trùng lên hàng đầu, đảm bảo an toàn tuyệt đối cho khách hàng.'
    ]
  },
  {
    title: 'Đội ngũ nhân viên',
    subtitles: [
      'Gặp gỡ Đội Ngũ Chuyên Gia Của Chúng Tôi',
      'Nguyễn Thị Thu: Chuyên gia Nail Art\nVới hơn 3 năm kinh nghiệm, Nguyễn Thị Thu nổi tiếng với sự tỉ mỉ và khả năng biến hóa mọi ý tưởng thành hiện thực trên từng bộ móng.',
      'Lý Đình Nam: Nhà tạo mẫu tóc hàng đầu\nLà một nghệ sĩ thực thụ với kéo và lược, Lý Đình Nam luôn nắm bắt nhanh chóng các xu hướng và tạo ra những kiểu tóc độc đáo, phù hợp với từng khuôn mặt.',
      'Chúng tôi không ngừng học hỏi và trau dồi kỹ năng để mang đến những dịch vụ tốt nhất cho bạn.'
    ]
  }
];

// Helper function for StorySection
const renderColumn = (content) => (
  <FadeInSection>
    <div className="story-col">
      {content.map((section, idx) => (
        <div className="story-section" key={section.title}>
          <div className="story-dot-line">
            <span className="story-dot" />
            {idx < content.length + 1 && <span className="story-line" />}
            {idx === content.length - 1 && <span className="story-dot story-dot-end" />}
          </div>
          <div className="story-content">
            <div className="story-title">{section.title}</div>
            {section.subtitles.map((sub, i) => (
              <div className="story-subtitle" key={i}>
                {sub.split('\n').map((line, j) => (
                  <span key={j}>{line}<br /></span>
                ))}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </FadeInSection>
);

// StorySection Component
const StorySection = () => (
  <FadeInSection>
    <div className="story-section-container">
      {renderColumn(leftContent)}
      {renderColumn(rightContent)}
    </div>
  </FadeInSection>
);

// About Page Component
const AboutPage = () => (
  <>
    <AboutBanner />
    <StorySection />
  </>
);

// Blog Components in Main.js
const BlogBanner = () => (
  <FadeInSection>
    <div className="blog-container">
      <span className="blog-title">Tin Tức</span>
      <span className="blog-subtitle">Cập nhật mới nhất từ August Studio</span>
    </div>
  </FadeInSection>
);

// ThreeColumnGallery Component
const ThreeColumnGallery = () => (
  <FadeInSection>
    <div className="three-col-gallery">
      {/* Cột 1 */}
      <div className="gallery-col col-1">
        <img src={require('../assets/images/my2.jpg')} alt="my2" className="gallery-img full" />
      </div>
      {/* Cột 2 */}
      <div className="gallery-col col-2">
        <img src={require('../assets/images/toc8.jpg')} alt="toc3" className="gallery-img half" />
        <img src={require('../assets/images/nail9.jpg')} alt="nail2" className="gallery-img half" />
      </div>
      {/* Cột 3 */}
      <div className="gallery-col col-3">
        <img src={require('../assets/images/cham-soc-mong1.jpg')} alt="my3" className="gallery-img row-img" />
        <div className="gallery-row">
          <img src={require('../assets/images/nail7.jpg')} alt="toc1" className="gallery-img small" />
          <img src={require('../assets/images/toc12.jpg')} alt="toc4" className="gallery-img small" />
        </div>
      </div>
    </div>
  </FadeInSection>
);

// BeautyBlog Component
const BeautyBlog = ({ onServices }) => {
  return (
    <FadeInSection>
      <div className="beauty-blog-container">
        <h2 className="beauty-blog-heading">OUR BLOG</h2>
        <h1 className="beauty-blog-title">CHÚNG TÔI CUNG CẤP NHỮNG ĐIỀU TỐT NHẤT</h1>
        <div className="beauty-card-container">
          <div className="beauty-card">
            <img src={hairIcon} alt="Hair Icon" className="beauty-card-icon" />
            <h3 className="beauty-card-title">THIẾT KẾ TÓC</h3>
            <p className="beauty-card-desc">Thiết kế tóc mang lại phong cách độc đáo và sự tự tin qua từng kiểu dáng.</p>
            <button className="beauty-learn-more" onClick={onServices}>
              Tìm hiểu thêm <span className="arrow">→</span>
            </button>
          </div>
          <div className="beauty-card">
            <img src={nailsIcon} alt="Nails Icon" className="beauty-card-icon" />
            <h3 className="beauty-card-title">CHĂM SÓC MÓNG</h3>
            <p className="beauty-card-desc">Chăm sóc móng thêm phần tinh tế và bảo vệ cho đôi tay của bạn.</p>
            <button className="beauty-learn-more" onClick={onServices}>
              Tìm hiểu thêm <span className="arrow">→</span>
            </button>
          </div>
          <div className="beauty-card">
            <img src={skinIcon} alt="Skin Icon" className="beauty-card-icon" />
            <h3 className="beauty-card-title">DƯỠNG DA</h3>
            <p className="beauty-card-desc">Dưỡng da là thói quen hàng ngày giúp giữ gìn và làm đẹp làn da tự nhiên.</p>
            <button className="beauty-learn-more" onClick={onServices}>
              Tìm hiểu thêm <span className="arrow">→</span>
            </button>
          </div>
        </div>
      </div>
    </FadeInSection>
  );
};

// Blog Data
const blogData = [
  {
    img: require("../assets/images/cham_soc_mong_tay.jpg"),
    title: "Thiết kế móng tinh tế, nâng tầm phong cách",
    desc: "Những mẫu nail tinh xảo giúp bạn nổi bật từng chi tiết. Ý tưởng nail thời thượng, cá tính cho vẻ ngoài mỗi ngày.",
    price: "200.000đ"
  },
  {
    img: require("../assets/images/nail2.jpg"),
    title: "Chăm sóc bàn tay dịu nhẹ, dưỡng ẩm sâu",
    desc: "Bàn tay mềm mại nhờ chăm sóc nhẹ nhàng, dưỡng chất tự nhiên cho làn da sáng khỏe, rạng rỡ.",
    price: "150.000đ"
  },
  {
    img: require("../assets/images/my3.jpg"),
    title: "Mỹ phẩm cao cấp, tự tin tỏa sáng",
    desc: "Tăng sự tự tin với mỹ phẩm chất lượng, an toàn. Sản phẩm sạch, ý thức vì làn da khỏe mạnh.",
    price: "350.000đ"
  },
  {
    img: require("../assets/images/toc11.jpg"),
    title: "Kiểu tóc hiện đại, cá tính riêng",
    desc: "Tóc đẹp, hợp xu hướng, phù hợp từng khuôn mặt. Đội ngũ chuyên gia tạo kiểu chuyên nghiệp.",
    price: "400.000đ"
  },
  {
    img: require("../assets/images/toc4.png"),
    title: "Chăm sóc tóc chuyên sâu, phục hồi hư tổn",
    desc: "Liệu trình phục hồi tóc hư tổn, dưỡng chất tự nhiên giúp tóc chắc khỏe, bóng mượt.",
    price: "300.000đ"
  },
  {
    img: require("../assets/images/toc3.jpg"),
    title: "Không gian làm đẹp sang trọng, thư giãn",
    desc: "Trải nghiệm dịch vụ làm đẹp trong không gian hiện đại, thư giãn tuyệt đối tại August Studio.",
    price: "Miễn phí tư vấn"
  },
];

const BlogGrid = () => (
  <FadeInSection>
    <div className="blog-grid-section">
      <h2 className="blog-grid-title">BLOG CỦA CHÚNG TÔI</h2>
      <div className="blog-grid-list">
        {blogData.map((item, idx) => (
          <div className="blog-grid-card" key={idx}>
            <div className="blog-grid-img-wrapper">
              <img src={item.img} alt={item.title} className="blog-grid-img" />
            </div>
            <div className="blog-grid-content">
              <div className="blog-grid-row">
                <button className="blog-grid-btn">
                  Đọc thêm
                </button>
                <span className="blog-grid-price-inline">{item.price}</span>
              </div>
              <span className="blog-grid-date">{item.date}</span>
              <div className="blog-grid-post-title">{item.title}</div>
              <div className="blog-grid-desc">{item.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </FadeInSection>
);

const BlogPage = ({ onBlog, onServices }) => (
  <>
    <BlogBanner />
    <ThreeColumnGallery />
    <BeautyBlog onServices={onServices} />
    <BlogGrid onServices={onServices} />
  </>
);

// Services Highlight Components
const ServiceHighlight = ({ onReadMore }) => (
  <FadeInSection>
    <div className="service-highlight-bg">
      <div className="service-highlight-title">DỊCH VỤ CỦA CHÚNG TÔI</div>
      <div className="service-highlight-content">
        {/* Hình tròn nền nằm sau ảnh, góc trên bên trái */}
        <span className="service-highlight-decor"></span>
        <img src={require('../assets/images/nail8.jpg')} alt="Dịch vụ nail" className="service-highlight-img" />
        <div className="service-highlight-box">
          <div className="service-highlight-box-title">
            Salon làm đẹp tốt nhất tại Việt Nam
          </div>
          <button className="service-highlight-btn" onClick={onReadMore}>
            ĐỌC THÊM <span className="arrow">→</span>
          </button>
        </div>
      </div>
    </div>
  </FadeInSection>
);

// ServicesGrid Component
const servicesGridData = [
  {
    img: require("../assets/images/toc13.jpg"),
    title: "Cắt mái",
  },
  {
    img: require("../assets/images/toc9.jpg"),
    title: "Uốn tóc",
  },
  {
    img: require("../assets/images/nail4.jpg"),
    title: "Sửa móng",
  },
  {
    img: require("../assets/images/toc7.jpg"),
    title: "Gội đầu thư giãn",
  },
  {
    img: require("../assets/images/nail6.jpg"),
    title: "Làm móng gel",
  },
  {
    img: require("../assets/images/toc10.jpg"),
    title: "Chăm sóc tóc",
  },
];

const ServicesGrid = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <FadeInSection>
      <div className="services-grid-section">
        <h2 className="services-grid-title">DỊCH VỤ LÀM ĐẸP CAO CẤP</h2>
        <div className="services-grid-description">
          Khám phá các dịch vụ làm đẹp chuyên nghiệp, mang đến sự hài lòng và trải nghiệm tuyệt vời cho bạn.
        </div>
        <div className="services-grid-list">
          {servicesGridData.map((s, i) => (
            <div
              className="services-grid-card"
              key={i}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <img src={s.img} alt={s.title} className="services-grid-img" />
              <div className={`services-grid-label${hovered === i ? " show" : ""}`}>
                {hovered === i && s.title}
              </div>
              {hovered === i && (
                <div className="services-grid-desc">{s.desc}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </FadeInSection>
  );
};

// PromotionBanner Component
const PromotionBanner = ({ onBlog }) => (
  <FadeInSection>
    <div className="promotion-banner">
      <div className="promotion-banner-title">
        ƯU ĐÃI 30% CHO KHÁCH HÀNG MỚI!
      </div>
      <button className="promotion-banner-btn" onClick={onBlog}>
        XEM CHI TIẾT <span className="arrow">→</span>
      </button>
    </div>
  </FadeInSection>
);

const reviews = [
  {
    text: `“Nghệ thuật làm móng rất đẹp và nhân viên rất thân thiện, chuyên nghiệp. Tuy nhiên, lớp sơn bắt đầu bong sau vài ngày, hơi thất vọng. Hy vọng lần sau sẽ bền hơn!”`
  },
  {
    text: `“Không gian sang trọng, dịch vụ chu đáo. Mình rất hài lòng với kiểu tóc mới, chắc chắn sẽ quay lại!”`
  },
  {
    text: `“Đội ngũ tư vấn nhiệt tình, sản phẩm chất lượng. Giá cả hợp lý, trải nghiệm tuyệt vời!”`
  }
];

// CustomerReviewSlider Component
const CustomerReviewSlider = () => {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState('');
  const [dragging, setDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const intervalRef = useRef();
  const dragStartX = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      triggerNext();
    }, 10000);
    return () => clearInterval(intervalRef.current);
  }, []);

  // Hiệu ứng chuyển mượt khi đổi review
  const triggerNext = () => {
    setFade('fade-out');
    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % reviews.length);
      setFade('fade-in');
      setTimeout(() => setFade(''), 200);
    }, 200);
  };

  const triggerPrev = () => {
    setFade('fade-out');
    setTimeout(() => {
      setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length);
      setFade('fade-in');
      setTimeout(() => setFade(''), 200);
    }, 200);
  };

  // Xử lý kéo chuột mượt mà
  const handleDragStart = (e) => {
    setDragging(true);
    dragStartX.current = e.type === "touchstart" ? e.touches[0].clientX : e.clientX;
    setDragOffset(0);
  };

  const handleDrag = (e) => {
    if (!dragging) return;
    let clientX;
    if (e.type === "touchmove") {
      clientX = e.touches[0].clientX;
    } else {
      clientX = e.clientX;
    }
    setDragOffset(clientX - dragStartX.current);
  };

  const handleDragEnd = (e) => {
    setDragging(false);
    let clientX;
    if (e.type === "touchend") {
      clientX = e.changedTouches[0].clientX;
    } else {
      clientX = e.clientX;
    }
    const diff = clientX - dragStartX.current;
    setDragOffset(0);
    if (diff > 60) {
      triggerPrev();
    } else if (diff < -60) {
      triggerNext();
    }
    dragStartX.current = null;
  };

  const handlePrev = () => {
    triggerPrev();
    clearInterval(intervalRef.current);
  };

  const handleNext = () => {
    triggerNext();
    clearInterval(intervalRef.current);
  };

  return (
    <div
      className="customer-review-slider"
      style={{ cursor: dragging ? "grabbing" : "grab" }}
      draggable
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDrag={handleDrag}
      onTouchStart={handleDragStart}
      onTouchMove={handleDrag}
      onTouchEnd={handleDragEnd}
    >
      <div className="customer-review-title">Khách Hàng Nói Gì Về Chúng Tôi</div>
      <div
        className={`customer-review-content${fade ? ' ' + fade : ''}`}
        style={{
          transform: dragging
            ? `translateX(${dragOffset}px)`
            : undefined,
          transition: dragging
            ? "none"
            : "opacity 0.5s, transform 0.5s"
        }}
      >
        <span className="review-quote-left">{'{'}</span>
        <span className="review-quote-icon">“</span>
        <span className="review-text">{reviews[current].text}</span>
        <span className="review-quote-icon">”</span>
        <span className="review-quote-right">{'}'}</span>
      </div>
      <div className="customer-review-controls">
        <button className="review-arrow" onClick={handlePrev} aria-label="Trước">
          &#8592;
        </button>
        <div className="review-dots">
          {reviews.map((_, idx) => (
            <span
              key={idx}
              className={`review-dot${current === idx ? " active" : ""}`}
              onClick={() => {
                setFade('fade-out');
                setTimeout(() => {
                  setCurrent(idx);
                  setFade('fade-in');
                  setTimeout(() => setFade(''), 500);
                }, 500);
                clearInterval(intervalRef.current);
              }}
            />
          ))}
        </div>
        <button className="review-arrow" onClick={handleNext} aria-label="Tiếp">
          &#8594;
        </button>
      </div>
    </div>
  );
};

// ServicesIntro Component
const ServicesIntro = ({ onBooking }) => (
  <FadeInSection>
    <div className="services-intro">
      <h2
        className="services-intro-title services-intro-title-link"
        onClick={onBooking}
        style={{ cursor: 'pointer' }}
      >
        Đặt Lịch Ngay Để Được Tư Vấn Miễn Phí!
      </h2>
    </div>
  </FadeInSection>
);

// Services Page Component
const ServicesPage = ({ onBooking, onReadMore, onBlog }) => (
  <>
    <ServiceHighlight onReadMore={onReadMore} />
    <ServicesGrid />
    <PromotionBanner onBlog={onBlog} />
    <CustomerReviewSlider />
    <ServicesIntro onBooking={onBooking} />
  </>
);

// Booking Constants
const SERVICES = ['Nail', 'Tóc', 'Nối Mi', 'Gội Đầu'];
const STAFF = ['Nguyễn Thị Thu', 'Lý Đình Nam', 'Bất kỳ'];
const PHONE = '0984131928';

// BookingBanner Component
const BookingBanner = () => (
  <FadeInSection>
    <div className="booking-container">
      <span className="booking-title">Đặt Lịch</span>
      <span className="booking-subtitle">Chọn dịch vụ và thời gian phù hợp với bạn</span>
    </div>
  </FadeInSection>
);

// BookingForm Component
const BookingForm = () => {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    service: '',
    staff: '',
    date: '',
    time: '',
    name: '',
    phone: '',
    email: '',
  });
  const [confirm, setConfirm] = useState(false);

  // Giả lập các khung giờ còn trống
  const availableTimes = ['09:00', '10:00', '11:00', '13:00', '14:00', '15:00', '16:00', '17:00'];
  
  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  
  const handleNext = () => setStep(step + 1);
  const handleBack = () => setStep(step - 1);
  
  const handleConfirm = async (e) => {
    e.preventDefault();
    const username = localStorage.getItem('username') || '';
    try {
      const response = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, username })
      });
      if (response.ok) {
        setConfirm(true);
      } else {
        const data = await response.json();
        alert(data.message || 'Đặt lịch thất bại. Vui lòng thử lại!');
      }
    } catch (err) {
      alert('Đặt lịch thất bại. Vui lòng thử lại!');
    }
  };
  
  return (
    <FadeInSection>
      <div className="booking-form-container">
        <div className="booking-guide">
          <div className="booking-guide-title">Chỉ vài bước đơn giản để có ngay lịch làm đẹp ưng ý tại August Studio.</div>
        </div>
        {!confirm ? (
          <form className="booking-form" onSubmit={handleConfirm}>
            {/* ...existing form steps... */}
            {step === 1 && (
              <div className="booking-step">
                <div className="booking-step-title">Bước 1: Chọn Dịch Vụ</div>
                <div className="select-wrapper">
                  <select name="service" value={form.service} onChange={handleChange} required className="booking-input select-arrow-left">
                    <option value="">-- Chọn dịch vụ --</option>
                    {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
                <div className="booking-step-btns">
                  <button type="button" className="booking-btn booking-btn-next" onClick={handleNext} disabled={!form.service}>
                    Tiếp tục<span className="arrow arrow-right">→</span>
                  </button>
                </div>
              </div>
            )}
            {step === 2 && (
              <div className="booking-step">
                <div className="booking-step-title">Bước 2: Chọn Chuyên Viên (Tùy chọn)</div>
                <div className="select-wrapper">
                  <select name="staff" value={form.staff} onChange={handleChange} className="booking-input select-arrow-left">
                    <option value="">-- Bất kỳ --</option>
                    {STAFF.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
                <div className="booking-step-btns">
                  <button type="button" className="booking-btn booking-btn-back" onClick={handleBack}>
                    {/* Nút Quay lại: hiện mũi tên trái khi hover */}
                    <span className="arrow arrow-left">←</span>Quay lại
                  </button>
                  <button type="button" className="booking-btn booking-btn-next" onClick={handleNext}>Tiếp tục<span className="arrow arrow-right">→</span></button>
                </div>
              </div>
            )}
            {step === 3 && (
              <div className="booking-step">
                <div className="booking-step-title">Bước 3: Chọn Ngày & Giờ</div>
                <input type="date" name="date" value={form.date} onChange={handleChange} required className="booking-input" min={new Date().toISOString().split('T')[0]} />
                <div className="select-wrapper">
                  <select name="time" value={form.time} onChange={handleChange} required className="booking-input select-arrow-left">
                    <option value="">-- Chọn khung giờ --</option>
                    {availableTimes.map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>
                <div className="booking-step-btns">
                  <button type="button" className="booking-btn booking-btn-back" onClick={handleBack}>
                    <span className="arrow arrow-left">←</span>Quay lại
                  </button>
                  <button type="button" className="booking-btn booking-btn-next" onClick={handleNext} disabled={!form.date || !form.time}>Tiếp tục<span className="arrow arrow-right">→</span></button>
                </div>
              </div>
            )}
            {step === 4 && (
              <div className="booking-step">
                <div className="booking-step-title">Bước 4: Nhập Thông Tin Cá Nhân</div>
                <input name="name" value={form.name} onChange={handleChange} required className="booking-input" placeholder="Họ tên" />
                <input name="phone" value={form.phone} onChange={handleChange} required className="booking-input" placeholder="Số điện thoại" />
                <input name="email" value={form.email} onChange={handleChange} required className="booking-input" placeholder="Email" />
                <div className="booking-step-btns">
                  <button type="button" className="booking-btn booking-btn-back" onClick={handleBack}>
                    <span className="arrow arrow-left">←</span>Quay lại
                  </button>
                  <button type="button" className="booking-btn booking-btn-next" onClick={handleNext} disabled={!form.name || !form.phone || !form.email}>Tiếp tục<span className="arrow arrow-right">→</span></button>
                </div>
              </div>
            )}
            {step === 5 && (
              <div className="booking-step">
                <div className="booking-step-title">Bước 5: Xác nhận</div>
                <div className="booking-summary">
                  <div><b>Dịch vụ:</b> {form.service}</div>
                  <div><b>Chuyên viên:</b> {form.staff || 'Bất kỳ'}</div>
                  <div><b>Ngày:</b> {form.date}</div>
                  <div><b>Giờ:</b> {form.time}</div>
                  <div><b>Họ tên:</b> {form.name}</div>
                  <div><b>Số điện thoại:</b> {form.phone}</div>
                  <div><b>Email:</b> {form.email}</div>
                </div>
                <div className="booking-step-btns">
                  <button type="button" className="booking-btn booking-btn-back" onClick={handleBack}>
                    <span className="arrow arrow-left">←</span>Quay lại
                  </button>
                  <button type="submit" className="booking-btn booking-btn-confirm">Xác nhận đặt lịch</button>
                </div>
              </div>
            )}
          </form>
        ) : (
          <div className="booking-confirm-message">
            <div className="booking-confirm-title">Bạn sẽ nhận được tin nhắn SMS hoặc email xác nhận lịch hẹn trong ít phút. Vui lòng kiểm tra.</div>
            <div className="booking-note">Vui lòng đến đúng giờ để chúng tôi có thể phục vụ bạn tốt nhất. Nếu có bất kỳ thay đổi nào, xin vui lòng thông báo trước 2 tiếng.</div>
            <div className="booking-note">Nếu bạn gặp khó khăn khi đặt lịch online, hãy gọi cho chúng tôi theo số: <a href={`tel:${PHONE}`}>{PHONE}</a></div>
          </div>
        )}
      </div>
    </FadeInSection>
  );
};

// Booking Page Component
const BookingPage = () => (
  <>
    <BookingBanner />
    <BookingForm />
  </>
);

// Contact Constants
const CONTACT_PHONE = '0984131928';
const CONTACT_EMAIL = 'bahiep13102005@gmail.com';
const MAP_ADDRESS = 'Nguyễn Thúc Dụ, Lê Quang Đạo, Đông Ngàn, Từ Sơn, Vietnam';
const MAP_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MAP_ADDRESS)}`;

const socialLinks = [
  { icon: facebookIcon, alt: 'Facebook', url: 'https://www.facebook.com/share/16NzxgifZR/?mibextid=wwXIfr' },
  { icon: instagramIcon, alt: 'Instagram', url: 'https://instagram.com' },
  { icon: tiktokIcon, alt: 'TikTok', url: 'https://tiktok.com' },
];

// ContactBanner Component
const ContactBanner = () => (
  <FadeInSection>
    <div className="contact-container">
      <span className="contacts-title">Liên Hệ Với Chúng Tôi</span>
      <span className="contacts-subtitle">Chúng tôi luôn sẵn sàng lắng nghe và phục vụ bạn</span>
    </div>
  </FadeInSection>
);

// ContactSection Component
const ContactSection = () => {
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    alert('Tin nhắn của bạn đã được gửi!');
    setForm({ name: '', phone: '', email: '', message: '' });
  };

  return (
    <FadeInSection>
      <div className="contact-section-container">
        <div className="contact-col contact-info-col">
          <div className="contact-title">Thông tin liên hệ chính</div>
          <div className="contact-info-list">
            <div className="contact-info-item">
              <img src={phoneIcon} alt="Phone" className="contact-info-icon" />
              <a href={`tel:${CONTACT_PHONE}`} className="contact-info-link">{CONTACT_PHONE}</a>
            </div>
            <div className="contact-info-item">
              <img src={mailIcon} alt="Email" className="contact-info-icon" />
              <a href={`mailto:${CONTACT_EMAIL}`} className="contact-info-link">{CONTACT_EMAIL}</a>
            </div>
          </div>
          <div className="contact-title contact-maps-title">Maps</div>
          <div className="contact-maps-block" onClick={() => window.open(MAP_URL, '_blank')} title="Xem bản đồ trên Google Maps">
            <img src={mapIcon} alt="Map" className="contact-info-icon" />
            <span className="contact-maps-address">{MAP_ADDRESS}</span>
          </div>
          <div className="contact-maps-iframe-wrapper">
            <iframe
              title="August Studio Map"
              src={`https://www.google.com/maps?q=${encodeURIComponent(MAP_ADDRESS)}&output=embed`}
              width="100%"
              height="180"
              style={{ border: 0, borderRadius: '8px', marginTop: '8px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div className="contact-col contact-form-col">
          <div className="contact-title">Form liên hệ</div>
          <form className="contact-form" onSubmit={handleSubmit} autoComplete="off">
            <div className="contact-form-row">
              <input
                type="text"
                name="name"
                placeholder="Họ tên"
                value={form.name}
                onChange={handleChange}
                required
                className="contact-input"
              />
              <input
                type="text"
                name="phone"
                placeholder="Số điện thoại"
                value={form.phone}
                onChange={handleChange}
                required
                className="contact-input"
              />
            </div>
            <div className="contact-form-row">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                required
                className="contact-input"
              />
            </div>
            <div className="contact-form-row">
              <textarea
                name="message"
                placeholder="Nội dung tin nhắn"
                value={form.message}
                onChange={handleChange}
                required
                className="contact-input contact-textarea"
                rows={3}
              />
            </div>
            <button type="submit" className="contact-submit-btn">
              Gửi tin nhắn  <span className="arrow">→</span>
            </button>
          </form>
          <div className="contact-title contact-social-title">Mạng xã hội</div>
          <div className="contact-social-sub">Theo dõi chúng tôi trên mạng xã hội để cập nhật xu hướng và ưu đãi mới nhất!</div>
          <div className="contact-social-icons">
            {socialLinks.map(link => (
              <a
                key={link.alt}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social-icon-link"
              >
                <img src={link.icon} alt={link.alt} className="contact-social-icon" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </FadeInSection>
  );
};

// Contact Page Component
const ContactPage = () => (
  <>
    <ContactBanner />
    <ContactSection />
  </>
);


// Update Main Component's switch case
const Main = ({ activePage, onExplore, onReadMore, onBooking, onBlog }) => {
  let content;
  switch (activePage) {
    case 'about':
      content = <AboutPage />;
      break;
    case 'blog':
      content = <BlogPage onBlog={onBlog} onServices={() => onExplore && onExplore()} />;
      break;
    case 'services':
      content = <ServicesPage onBooking={onBooking} onReadMore={onReadMore} onBlog={onBlog} />;
      break;
    case 'contact':
      content = <ContactPage />;
      break;
    case 'booking':
      content = <BookingPage />;
      break;
    case 'home':
    default:
      content = <Home onExplore={onExplore} onReadMore={onReadMore} onBlog={onBlog} />;
      break;
  }
  return <main className="main">{content}</main>;
};

export default Main;


