import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/club-ciencia-viva.png';

function Navbar() {
  const [Active, setActive] = useState('');
  return (
    <nav className="sm:px-16 px-6 w-full flex items-center py-5 fixed top-0 z-20 bg-secondary shadow-xl">
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link to="/" className="flex items-center gap-2" onClick={() => { setActive(''); window.scrollTo(0, 0); }}>
          <img src={logo} alt="Logo" className="w-15 h-10 object-contain" />
        </Link>
        <Link to="/"><p>Olá</p></Link>
      </div>
    </nav>
  );
}

export default Navbar;
