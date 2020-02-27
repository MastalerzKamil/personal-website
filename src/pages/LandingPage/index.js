import React from 'react';
import meImage from './../../img/me-photo.jpg';
import githubLogo from './../../img/logo/GitHub.png';
import linkedInLogo from './../../img/logo/LinkedIn.png';

import './index.css';

function LandingPage() {
  return (
    <div className='LandingPage'>
      <img
        src={meImage}
        className='LandingPage__mePicture'
        alt='meImage'
      />
      <div
        className='LandingPage__content LandingPage__name'
      >
        Kamil Mastalerz
      </div>
      <div
      className='LandingPage__content LandingPage__title'
      >
      Full-Stack developer available for hire
      </div>
      <div className='LandingPage__links'>
          <a href='https://github.com/MastalerzKamil'>
            <img src={githubLogo} className='LandingPage__link' alt='github' />
          </a>
          <a href='https://www.linkedin.com/in/kamil-mastalerz'>
            <img src={linkedInLogo} className='LandingPage__link' alt='linkedin' />
          </a>
      </div>
      <div className='LandingPage__background'></div>
    </div>
  );
}

export default LandingPage;