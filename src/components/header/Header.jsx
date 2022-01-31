import React from 'react';
import './header.css';

const Header = () => {
  return <span onClick={() => {return window.scroll(0, 0)}} className='header'>🎥 محیط جستجوی فیلم و سریال 🎬</span>;
};

export default Header;
