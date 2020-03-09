import React from 'react';
import contractHandshake from 'img/handshake.jpg';

import './index.css';

function Contact() {
  return (
    <div className='Contact'>
      <div className='Contact__section'>
        <div className='Contact__move'>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 270"
          >
            <path
              fill="#80A5BF"
              fill-opacity="1"
              d="M0,0 L1440,224 L1440,0 L0,0Z"
            ></path>
          </svg>
        </div>
        <img
          src={contractHandshake}
          className='Contact__img'
          alt='handshake'
        />
      </div>
    </div>
  );
}

export default Contact;