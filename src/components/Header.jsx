import React from 'react';
import Logo from '../images/jurassic-logo.png'

function Header() {
  return (
    <header >
      <span className="title">Jurassic Timer</span>
      <img src={ Logo } alt="jurassic world symbol" className="logo" />
    </header>
  );
}

export default Header;