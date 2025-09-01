'use client';

import React, { useEffect, useState, CSSProperties } from 'react';
import './Banner.css';

const images = [
  '/images/2.jpeg',
  '/images/3.jpeg',
  '/images/4.jpeg',
  '/images/5.jpeg',
];

export default function Banner() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000); // change slide every 4 seconds
    return () => clearInterval(interval);
  }, []);

  const backgroundStyle: CSSProperties = {
    backgroundImage: `url(${images[index]})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '70vh',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'background-image 1s ease-in-out',
  };

  return (
    <div className="banner-container">
      <div className="banner-slide" style={backgroundStyle}>
        <div className="banner-content">
          <h1>Authentic Ethiopian Flavors</h1>
          <p>Experience the True Taste of Ethiopia with Megeb Export</p>
        </div>
      </div>
    </div>
  );
}
