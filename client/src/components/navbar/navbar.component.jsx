import React from 'react';
import './navbar.styles.css';
import { NavLink } from 'react-router-dom';

 

const MovieGoNavbar = () => {
    return (
      <nav className="nav-movie-go-container">
        <ul className="nav-movie-go-list">
          <li className="nav-movie-go-item" id="all">
            <NavLink exact={true} to="/" activeClassName="activeLink"
              className="nav-movie-go-link">
              All
            </NavLink>
          </li>
          <li className="nav-movie-go-item" id="28">
            <NavLink to="/action" activeClassName="activeLink"
              className="nav-movie-go-link">
              Action
            </NavLink>
          </li>
          <li className="nav-movie-go-item" id="35">
            <NavLink to="/comedy" activeClassName="activeLink"
              className="nav-movie-go-link">
              Comedy
            </NavLink>
          </li>
          <li className="nav-movie-go-item" id="18">
            <NavLink to="/drama" activeClassName="activeLink"
              className="nav-movie-go-link">
              Drama
            </NavLink>
          </li>
          <li className="nav-movie-go-item" id="27">
            <NavLink to="/horror" activeClassName="activeLink"
              className="nav-movie-go-link">
              Horror
            </NavLink>
          </li>
          <li className="nav-movie-go-item" id="10749">
            <NavLink to="/romance" activeClassName="activeLink"
              className="nav-movie-go-link">
              Romance
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  
}
export default MovieGoNavbar;
