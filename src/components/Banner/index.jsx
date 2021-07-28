import './style.css';
import React from 'react';
import BannerImage from '@assets/images/banner.jpg';

const Banner = () => {
  return (
    <div className="banner">
      <img src={BannerImage} alt="banner" />
    </div>
  );
};

export default Banner;
