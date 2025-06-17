import React, { useRef, useEffect, useState } from "react";

const FadeInSection = ({ children, className = "", ...props }) => {
  const domRef = useRef();
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setVisible(true);
        });
      },
      { threshold: 0.15 }
    );
    if (domRef.current) observer.observe(domRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={domRef}
      className={`fade-in-section${isVisible ? " is-visible" : ""} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default FadeInSection;