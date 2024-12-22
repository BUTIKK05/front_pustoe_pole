// src/ThirdLink.js
import React from 'react';
import './ThirdLinkPage.css';

const ThirdLinkPage = () => {
  return (
    <div className="container">
      <div className="image-gallery">
        <img src="/img/third_photo.jpg" alt="Image 1" />
        <img src="/img/thirdlinkphoto2.jpg" alt="Image 2" />
        <img src="/img/thirdlinkphoto3.jpg" alt="Image 3" />
      </div>
      <div className="description">
        <h2>Hotel Room 3</h2>
        <p>
          The most popular room according to reviews, a gorgeous view of the
          avenue, a double bed, a toilet, a bathroom
        </p>
      </div>
      <div className="footer">
        <a href="front.html" className="home-link">Go to Home Page</a>
      </div>
    </div>
  );
};

export default ThirdLinkPage;
