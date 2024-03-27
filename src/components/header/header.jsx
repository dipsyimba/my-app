import React from 'react';
import './header.css';
import Marquee from "../marquee/marquee";
import img from "../../images/DONKWIF.jpg";

function Header() {
  return (
      <div className="header__container">
          <Marquee/>

          <div className='header'>
              <p className='header_text'>Welcome to $DONKWIF Token</p>
          </div>
      </div>
  );
}

export default Header;
