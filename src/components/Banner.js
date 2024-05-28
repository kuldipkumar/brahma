import React from 'react';
import './Banner.css';

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-text">Cosmos Chatbot</div>
      <div className="user-icon">
        <i className="fas fa-user-circle"></i>
        <i className="fas fa-bars"></i>
      </div>
    </div>
  );
};

export default Banner;
