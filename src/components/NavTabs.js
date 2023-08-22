import React from 'react';
import { NavLink } from 'react-router-dom';

function NavTabs() {
  return (
    <div className='navbar'>
    <ul className="nav ul nav-tabs">
      <li className="navbar item">
        <NavLink
          to="/React-Portfolio/"
          end
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Home
        </NavLink>
      </li>
      <li className="navbar item">
        <NavLink
          to="/React-Portfolio/project-gallery/"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Project Gallery
        </NavLink>
      </li>
      <li className="navbar item">
        <NavLink
          to="/React-Portfolio/contact/"
          end
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Contact
        </NavLink>
      </li>
    </ul>
    </div>
  );
}

export default NavTabs;
