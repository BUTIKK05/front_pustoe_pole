// src/FirstLink.js
import React from 'react';
import './FirstLinkPage.css';

const FirstLink = () => {
  return (
    <div className="container">
      <div className="image-gallery">
        <img src="../../assets/first_photo.jpg" alt="Image 1" />
        <img src="/img/firstlinkphoto2.jpg" alt="Image 2" />
        <img src="/img/firstlinkphoto3.jpg" alt="Image 3" />
      </div>
      <div className="description">
        <h2>Hotel Room 1</h2>
        <p>
          Room for three people, two bedrooms, there is a toilet, bathroom,
          kitchen, with a view of the park
        </p>
      </div>
      <div className="footer">
        <a href="front.html" className="home-link">Go to Home Page</a>
      </div>
    </div>
  );
};

export default FirstLink;
