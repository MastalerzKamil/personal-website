import React from 'react';
import pcImage from 'img/landing-page.jpg'
import meImage from 'img/me-photo.jpg'

import './index.css';

function LandingPage() {
  return (
    <div className='LandingPage'>
      <div className='split LandingPage__left'>
        <img src={pcImage} className='LandingPage__leftBackground' alt='landing-page'/>
      </div>
      <div className='split LandingPage__right'>
        <img src={meImage} className='LandingPage__mePhoto' alt='me' />
        <div className='LandingPage__name'>Kamil Mastalerz</div>
        <div className='LandingPage__description'>Full-Stack developer available for hire</div>
      </div>
    </div>
  )
}

export default LandingPage;