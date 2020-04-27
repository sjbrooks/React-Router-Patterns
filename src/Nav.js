import React from 'react';
import './App.css';
import { NavLink } from 'react-router-dom';
import "./Nav.css"

function Nav({ dogs }) {

  const dogLinks = dogs.map(
    d => (
      <NavLink to={`/dogs/${d.name.toLowerCase()}`} className="nav-bar-link">
        {d.name}
      </NavLink>
    )
  )

  return (
    <nav>
    <NavLink to="/dogs" className="nav-bar-link">
      Home
    </NavLink>
    {dogLinks}
    </nav>
  );
}

export default Nav;