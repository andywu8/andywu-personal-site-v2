import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import './Navbar.css';
export default class Nav extends React.Component {
  render() {    
    return (
      <nav className="Nav">
        <div className="Nav__container">
          <Link to="/" className="Nav__brand">
          </Link>

          <div className="Nav__right">
            <ul className="Nav__item-wrapper">
              <li className="Nav__item">
                <Link className="Nav__link" smooth spy to="/about-me">About Me</Link>
              </li>
              <li className="Nav__item">
                <Link className="Nav__link" to="/path2">Experience</Link>
              </li>
              <li className="Nav__item">
                <Link className="Nav__link" to="/path3">Projects</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}