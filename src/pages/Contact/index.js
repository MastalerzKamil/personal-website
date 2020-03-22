import React, { useState } from 'react';
import contractHandshake from 'img/handshake.jpg';

import './index.css';
import TextField from '../../components/TextField';

function Contact() {
  const [form, setForm]= useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = stateName => event => {
    setForm({
      ...form,
      [stateName]: event.target.value
    })
  }

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
          <div className='Contact__title'>
            Write me a message
          </div>
          <div className='Contact__form'>
            <form>
              <TextField
                onChangeValue={handleChange}
                value={form}
                label='Imie'
              />
            </form>
          </div>
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