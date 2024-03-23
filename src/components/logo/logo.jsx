import React from 'react';
import './logo.css';

function Logo(props) {
    return (
        <div className='logo'>
            <img className="logo__image" src={props.image} alt="logo"/>
            {props.text && <p>{props.text}</p>}
        </div>
    );
}

export default Logo;
