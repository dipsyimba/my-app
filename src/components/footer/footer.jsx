import React from 'react';
import Logo from "../logo/logo";
import devtools from '../../images/dextools-seeklogo.svg';

function Footer() {
  return (
      <div className="footer__container">
          <p className="footer__text">Join $Donkey community</p>

          <div className='footer'>
              <Logo image={devtools}/>
          </div>
      </div>

  );
}

export default Footer;
