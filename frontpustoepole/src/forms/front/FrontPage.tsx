// src/FrontPage.js
import React, { useState } from 'react';
import './FrontPage.css';

const FrontPage = () => {
  const [dropdowns, setDropdowns] = useState({
    pointDropdown: false,
    mailDropdown: false,
    phoneDropdown: false,
  });

  const [formData, setFormData] = useState({
    arrivalDate: '',
    departureDate: '',
    amountOfPeople: 1,
  });

  const [errorMessage, setErrorMessage] = useState('');

  const toggleDropdown = (dropdownId) => {
    setDropdowns((prev) => ({
      ...prev,
      [dropdownId]: !prev[dropdownId],
    }));
  };

  const validateInputs = async () => {
    const { arrivalDate, departureDate } = formData;
    if (!arrivalDate || !departureDate) {
      setErrorMessage('Please select both arrival and departure dates.');
      return;
    }

    if (new Date(arrivalDate) > new Date(departureDate)) {
      setErrorMessage('Error: Arrival date cannot be later than departure date.');
      return;
    }

    setErrorMessage('');
    alert('Search initiated!');
    
    const url = "http://localhost:8080/bookings";
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      });
      console.log(response);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div>
      <div className="wraper">
        <div className="point">
          <img
            src="/img/point.jpg"
            alt="Адрес"
            onClick={() => toggleDropdown('pointDropdown')}
          />
          {dropdowns.pointDropdown && (
            <ul className="dropdown3" id="pointDropdown">
              <li>Nezavisimosti 10</li>
            </ul>
          )}
        </div>
        <div className="mail">
          <img
            src="/img/mail.jpg"
            alt="Почта"
            onClick={() => toggleDropdown('mailDropdown')}
          />
          {dropdowns.mailDropdown && (
            <ul className="dropdown3" id="mailDropdown">
              <li>butik@mail.com</li>
            </ul>
          )}
        </div>
        <div className="phone">
          <img
            src="/img/phone.jpg"
            alt="Телефон"
            onClick={() => toggleDropdown('phoneDropdown')}
          />
          {dropdowns.phoneDropdown && (
            <ul className="dropdown3" id="phoneDropdown">
              <li>+375 44 588 99 44</li>
            </ul>
          )}
        </div>
        <div className="account">
          <a href="/registration.html">
            <img src="/img/account2.jpg" alt="Account" />
          </a>
        </div>
      </div>

      <div className="name">
        <p>
          <span className="big">BUTIK</span> <span className="small">DI</span>
          <span className="big">MOSCA</span>
        </p>
        <p className="big">HOTEL</p>
      </div>

      <div className="container">
        <div className="dropdown">
          <label htmlFor="arrival-date">Arrival date</label>
          <input
            type="date"
            id="arrival-date"
            name="arrivalDate"
            className="date-input"
            value={formData.arrivalDate}
            onChange={handleChange}
          />
        </div>

        <div className="dropdown">
          <label htmlFor="departure-date">Departure date</label>
          <input
            type="date"
            id="departure-date"
            name="departureDate"
            className="date-input"
            value={formData.departureDate}
            onChange={handleChange}
          />
        </div>

        <div className="dropdown">
          <label htmlFor="amount-of-people">Amount of people</label>
          <input
            type="number"
            id="amount-of-people"
            name="amountOfPeople"
            className="people-input"
            min="1"
            max="4"
            value={formData.amountOfPeople}
            onChange={handleChange}
          />
        </div>

        <button className="action-button" onClick={validateInputs}>
          Search
        </button>

        {errorMessage && <div id="error-message" style={{ color: 'red', marginTop: '10px' }}>{errorMessage}</div>}
      </div>

      <div className="navbar">
        <a href="#section1" className="nav-btn">NOMERA</a>
        <a href="#section2" className="nav-btn">RESTAURANTS</a>
        <a href="#section3" className="nav-btn">SPA & FITNESS</a>
        <a href="#section4" className="nav-btn">EVENTS</a>
      </div>

      <div className="navbar2">
        <button className="arrow" id="scrollLeft">&#9664;</button>
        <div className="menu-container" id="menuContainer">
          <span className="nav-text" style={{ display: 'block' }}>! Discounts !</span>
          <span className="nav-text" style={{ display: 'none' }}>! NEW DIRECTOR !</span>
          <span className="nav-text" style={{ display: 'none' }}>25.10.2024 PARTY</span>
          <span className="nav-text" style={{ display: 'none' }}>! NEW ROOMS !</span>
        </div>
        <button className="arrow" id="scrollRight">&#9654;</button>
      </div>

      <div className="photo-container">
        <div className="photo-item">
          <a href="/firstlink.html">
            <img src="/img/first_photo.jpg" alt="Фото 1" />
            <button className="photo-button">100£/Person</button>
          </a>
        </div>
        <div className="photo-item">
          <a href="/secondlink.html">
            <img src="/img/second_photo.jpg" alt="Фото 2" />
            <button className="photo-button">80£/Person</button>
          </a>
        </div>
        <div className="photo-item">
          <a href="/thirdlink.html">
            <img src="/img/third_photo.jpg" alt="Фото 3" />
            <button className="photo-button">60£/Person</button>
          </a>
        </div>
        <div className="photo-item">
          <a href="/fourth.html">
            <img src="/img/fourth_photo.jpg" alt="Фото 4" />
            <button className="photo-button">40£/Person</button>
          </a>
        </div>
      </div>

      <footer className="footer">
        <p>Nezavisimosti, 10, Minsk, Belarus. Tel: +375 44 588 99 44</p>
        <p>© 2023. Hotel Butik di Mosca</p>
        <p>Official website</p>
      </footer>
    </div>
  );
};

export default FrontPage;
