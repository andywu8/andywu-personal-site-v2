import React from 'react';
import { Link } from 'react-scroll'
import './Navbar.css';

export default class Nav extends React.Component {
  render() {    
    return (
      <header className="nav">
        <nav className="nav__container__actions">
          <ul>
            <li>
              <Link activeClass="active" smooth spy to="about-me">
                About Me
              </Link>
            </li>
            <li>
              <Link activeClass="active" smooth spy to="experience">
                Experience
              </Link>
            </li>
            <li>
              <Link activeClass="active" smooth spy to="projects">
                Projects
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}