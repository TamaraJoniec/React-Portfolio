import React, { useState } from 'react';

function NavTabs() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="navbar">
      <button id="toggleNav" onClick={() => setNavOpen(!navOpen)}>Menu</button>
      <ul style={{ transform: navOpen ? 'translateX(0)' : 'translateX(100%)' }}>
        <li>
          <button onClick={() => setNavOpen(false)}>X</button>
        </li>
        <li><a href="/React-Portfolio/">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="/React-Portfolio/project-gallery/">Portfolio</a></li>
        <li><a href="/React-Portfolio/contact/">Contact</a></li>
      </ul>

    </div>

  );
}


export default NavTabs;
