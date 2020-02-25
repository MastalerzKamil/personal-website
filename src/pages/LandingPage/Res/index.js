import React from 'react';
import meImage from 'img/me-photo.jpg';
import githubLogo from 'img/logo/GitHub.png';
import linkedInLogo from 'img/logo/LinkedIn.png';

import './index.css';

function ResLandingPage() {
  return (
    <div className='ResLandingPage'>
      <img
        src={meImage}
        className='ResLandingPage__mePicture'
        alt='meImage'
      />
      <div
        className='ResLandingPage__content ResLandingPage__name'
      >
        Kamil Mastalerz
      </div>
      <div
      className='ResLandingPage__content ResLandingPage__title'
      >
      Full-Stack developer available for hire
      </div>
      <div className='ResLandingPage__links'>
          <a href='https://github.com/MastalerzKamil'>
            <img src={githubLogo} className='ResLandingPage__link' alt='github' />
          </a>
          <a href='https://www.linkedin.com/in/kamil-mastalerz'>
            <img src={linkedInLogo} className='ResLandingPage__link' alt='linkedin' />
          </a>
      </div>
      <div className='ResLandingPage__background'></div>
    </div>
  );
}

export default ResLandingPage;