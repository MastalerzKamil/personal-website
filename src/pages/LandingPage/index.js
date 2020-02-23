import React from 'react';
import pcImage from 'img/landing-page.jpg'

import './index.css';

function LandingPage() {
  return (
    <div className='LandingPage'>
      <div className='split LandingPage__left'>
        <img src={pcImage} alt='landing-page'/>
      </div>
      <div className='split LandingPage__right'></div>
    </div>
  )
}

export default LandingPage;