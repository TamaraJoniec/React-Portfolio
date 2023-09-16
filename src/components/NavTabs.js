import React, { useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

function NavTabs() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="navbar">
      <button id="toggleNav" onClick={() => setNavOpen(!navOpen)}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>      </button>
      <ul style={{ transform: navOpen ? 'translateX(0)' : 'translateX(100%)' }}>
        <li><a href="/React-Portfolio/">Home</a></li>
        <li><a href="/React-Portfolio/#about">About</a></li>
        <li><a href="/React-Portfolio/project-gallery/">Portfolio</a></li>
        <li><a href="/React-Portfolio/contact/">Contact</a></li>
      </ul>
    </div>
  );
}



export default NavTabs;
