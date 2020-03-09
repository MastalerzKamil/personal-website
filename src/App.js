import React from 'react';
import LandingPage from 'pages/LandingPage';
import Skills from 'pages/Skills';

import './App.css';
import Hobbies from './pages/Hobbies';
import Contact from './pages/Contact';

function App() {
  return (
    <div className='App'>
      <div>
        <LandingPage />
      </div>
      <Skills />
      <Hobbies />
      <Contact />
    </div>
  );
}

export default App;
