import React, { useState, useRef, useEffect } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

function NavTabs() {
  const [navOpen, setNavOpen] = useState(false);
  const menuRef = useRef(); // This will hold the reference to your menu

  useEffect(() => {
    if (window.location.pathname === "/React-Portfolio/#about") { // Only for the About page
      const handleOutsideClick = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
          setNavOpen(false);
        }
      };

      // Attach the listener to the document
      document.addEventListener("click", handleOutsideClick);

      // Cleanup the listener when the component is unmounted
      return () => {
        document.removeEventListener("click", handleOutsideClick);
      };
    }

  }, []);

  return (
    <div className="navbar">
      <button id="toggleNav" onClick={() => setNavOpen(!navOpen)}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>      </button>
      <ul style={{ transform: navOpen ? 'translateX(0)' : 'translateX(100%)' }}>
        <li><a href="/" >Home</a></li>
        <li><a href="/#about">About</a></li>
        <li><a href="/project-gallery">Portfolio</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </div>
  );
}



export default NavTabs;
