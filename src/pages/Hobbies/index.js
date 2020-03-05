import React from 'react';
import imgSharingKnowledge from 'img/hobbies/sharing.jpg';
import imgPersonalDevelopment from 'img/hobbies/personal-development.jpg';
import imgGym from 'img/hobbies/gym.jpg';
import imgTravel from 'img/hobbies/travel.jpg';

import './index.css';

function Hobbies() {
  return (
    <div className='Hobbies'>
      <div className='Hobbies__move'>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 270"
        >
          <path
            fill="#2B3740"
            fill-opacity="1"
            d="M0,224 L1440,0L 1440,0L0,0Z"
          ></path>
        </svg>
      </div>
      <div className='Hobbies__title'>
        Hobbies
      </div>
      <div className='Hobbies__tiles'>
        <div className='Hobbies__element'>
          <img
            src={imgSharingKnowledge}
            className='Hobbies__img'
            alt='sharingKnowledge'
          />
          <div className='Hobbies__elementOverlay'>
            <div className='Hobbies__elementOverlay__text'>
              Knowledge sharing
            </div>
          </div>
        </div>
        <div className='Hobbies__element'>
          <img
            src={imgPersonalDevelopment}
            className='Hobbies__img'
            alt='personalDevelopment'
          />
          <div className='Hobbies__elementOverlay'>
            <div className='Hobbies__elementOverlay__text'>
              Personal Development
            </div>
          </div>
        </div>
        <div className='Hobbies__element'>
          <img
            src={imgGym}
            className='Hobbies__img'
            alt='gym'
          />
          <div className='Hobbies__elementOverlay'>
            <div className='Hobbies__elementOverlay__text'>
              Sports activity
            </div>
          </div>
        </div>
        <div className='Hobbies__element'>
          <img
            src={imgTravel}
            className='Hobbies__img'
            alt='travel'
          />
          <div className='Hobbies__elementOverlay'>
            <div className='Hobbies__elementOverlay__text'>
              Travels
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hobbies;