import React from 'react';
import './header.css';
import Marquee from "../marquee/marquee";
import img from "../../images/photo_2024-03-23_17-19-50 (2).jpg";

function Header() {
  return (
      <div className="header__container">
          <Marquee/>
          <img src={img} alt="Donkey" className="header__image"/>
          <div className='header'>
              <p className='header_text'>Welcome to Donkey Token</p>
          </div>
      </div>
  );
}

export default Header;
