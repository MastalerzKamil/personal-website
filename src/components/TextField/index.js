// source: https://freefrontend.com/css-input-text/
import React from 'react';

import './index.css';

function TextField({
  label, helperText, onChangeValue, value
}) {

  return (
    <div class='omrs-input-group'>
      <label class='omrs-input-filled'>
        <input
          required
          value={value.name}
          onChange={onChangeValue('name')}
        />
			  <span class='omrs-input-label'>Normal label</span>
				<span class='omrs-input-helper'>helper</span>
			  <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
        >
          <path fill='none' d='M0 0h24v24H0V0z'/>
          <circle cx='15.5' cy='9.5' r='1.5'/>
          <circle cx='8.5' cy='9.5' r='1.5'/>
          <path
            d='M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm-5-6c.78 2.34 2.72 4 5 4s4.22-1.66 5-4H7z'
          />
        </svg>
      </label>
    </div>
  )
}

export default TextField;