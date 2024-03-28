import React from 'react';
import Logo from '../logo/logo';
import tg from '../../images/telegram.png';
import twitter from '../../images/twitter.png';

function Main() {
    const items = [
        {
            src: tg,
            link: 'https://t.me/donkwif'
        },
        {
            src: twitter,
            link: 'https://twitter.com/donkeytkn'
        }
    ]
  return (
    <div className='main'>
        <div className="main__container">
            <div className="main__community">
                <Logo items={items}/>
            </div>
            <div className="main__text">
                $DONKWIF is the inaugural token set to revolutionize the meme token market, serving as a litmus test to identify those who fail to invest in meme tokens as donkeys
            </div>
        </div>
    </div>
  );
}

export default Main;
