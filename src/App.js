import React from 'react';
import LandingPage from 'pages/LandingPage';
import Skills from 'pages/Skills';

import './App.css';
import Hobbies from './pages/Hobbies';

function App() {
  return (
    <div className='App'>
      <div>
        <LandingPage />
      </div>
      <Skills />
      <Hobbies />
    </div>
  );
}

export default App;
