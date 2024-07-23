import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

import "bootstrap-icons/font/bootstrap-icons.css";

function NavTabs() {
  const [navOpen, setNavOpen] = useState(false);
  const menuRef = useRef();
  const toggleButtonRef = useRef();

  useEffect(() => {
    if (window.location.pathname === "/React-Portfolio/#about") {
      const handleOutsideClick = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
          setNavOpen(false);
        }
      };
      document.addEventListener("click", handleOutsideClick);

      return () => {
        document.removeEventListener("click", handleOutsideClick);
      };
    }
  }, []);

  useEffect(() => {
    if (navOpen) {
      menuRef.current?.focus();
    } else {
      toggleButtonRef.current?.focus();
    }
  }, [navOpen]);

  return (
    <nav className="navbar">
      <button
        id="toggleNav"
        ref={toggleButtonRef}
        onClick={() => setNavOpen(!navOpen)}
        aria-expanded={navOpen}
        aria-controls="navigationMenu">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>{" "}
      </button>
      <div
        id="navigationMenu"
        ref={menuRef}
        tabIndex="-1"
        style={{ display: navOpen ? "block" : "none" }}>
        <ul style={{ transform: navOpen ? "translateX(0)" : "translateX(100%)" }}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/project-gallery/">Portfolio</Link></li>
          <li><Link to="/contact/">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default NavTabs;
