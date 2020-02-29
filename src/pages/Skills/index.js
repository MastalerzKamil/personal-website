import React from 'react';
import reactLogo from 'img/logo/react.png';
import dockerLogo from 'img/logo/docker.png';
import nodeLogo from 'img/logo/node.png';

import './index.css';

function Skills() {
  return (
    <div className='Skills'>
      <div className='Skills__title'>
        Main technologies
      </div>
      <div className='Skills__technologies'>
        <img className='Skills__img' src={reactLogo} alt='react' />
        <img className='Skills__img' src={nodeLogo} alt='node' />
        <img className='Skills__img' src={dockerLogo} alt='node' />
      </div>
    </div>
  );
}

export default Skills;