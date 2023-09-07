import React from 'react';
import { Link } from 'react-scroll'
import navbar_css from './Navbar.module.css';

export default class Nav extends React.Component {
  render() {    
    return (
      <div className={navbar_css.nav}>
        <nav className={navbar_css.nav__container__actions}>
          <ul>
            <li>
              <Link class={navbar_css.active} smooth spy to="about-me">
                About Me
              </Link>
            </li>
            <li>
              <Link class={navbar_css.active} smooth spy to="experience">
                Experience
              </Link>
            </li>
            <li>
              <Link class={navbar_css.active} smooth spy to="projects">
                Projects
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}