import React from 'react';

import './index.css';

function Navbar() {
  return (
    <nav class="navbar">
    <div class="menu">
      <ion-icon name="ios-menu"></ion-icon>
    </div>
    <div class="logo">
      <ion-icon name="ios-heart"></ion-icon> mjstk
    </div>
    <div class="search">
      <ion-icon name="ios-search"></ion-icon>
    </div>
    <div class="cart">
      <ion-icon name="ios-cart"></ion-icon>
    </div>
    <div class="profile"><img src="./img/profile.jpg" alt=""/></div>
  </nav>
  )
}

export default Navbar;