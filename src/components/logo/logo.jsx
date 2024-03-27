import React from 'react';
import './logo.css';

function Logo(props) {
    const { items } = props;
    return (
        <div className='logo'>
            <p className="logo__text">Join $DONKWIF community</p>
            <div className="logo__container">
                {items.map((item, index) => (
                    <a key={index} href={item.link} target="_blank" rel="noopener noreferrer">
                        <img className="logo__image" src={item.src} alt="logo"/>
                    </a>
                ))}
            </div>
        </div>
    );
}

export default Logo;
