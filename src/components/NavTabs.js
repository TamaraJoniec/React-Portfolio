import React, { useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

function NavTabs() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="navbar">
      <button className="hamburger" onClick={() => setNavOpen(!navOpen)}>
        <i className="bi bi-list"></i>
        <ul style={{ transform: navOpen ? 'translateX(0)' : 'translateX(100%)' }}>
          <li>
            <button onClick={() => setNavOpen(false)}>X</button>
          </li>
          <li><a href="/React-Portfolio/">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="/React-Portfolio/project-gallery/">Portfolio</a></li>
          <li><a href="/React-Portfolio/contact/">Contact</a></li>
        </ul>
      </button>
    </div>

  );
}


export default NavTabs;
