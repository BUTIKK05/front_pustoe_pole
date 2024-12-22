// src/SecondLink.js
import React from 'react';
import './SecondLinkPage.css';

const SecondLinkPage = () => {
  return (
    <div className="container">
      <div className="image-gallery">
        <img src="/img/second_photo.jpg" alt="Image 1" />
        <img src="/img/secondlinkphoto2.jpg" alt="Image 2" />
        <img src="/img/secondlinkphoto3.jpg" alt="Image 3" />
      </div>
      <div className="description">
        <h2>Hotel Room 2</h2>
        <p>Double room, two bedrooms, bathroom, kitchen, with all amenities</p>
      </div>
      <div className="footer">
        <a href="front.html" className="home-link">Go to Home Page</a>
      </div>
    </div>
  );
};

export default SecondLinkPage;
