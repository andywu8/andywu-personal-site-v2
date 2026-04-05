import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import './Components.css';

const NAV_LINKS = [
  { name: 'About', id: 'about-me' },
  { name: 'Experience', id: 'experience' },
  { name: 'Projects', id: 'projects' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      background: scrolled ? 'rgba(10, 10, 15, 0.85)' : 'transparent',
      backdropFilter: scrolled ? 'blur(16px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : 'none',
      transition: 'all 0.3s ease',
    }}>
      <div style={{
        maxWidth: '1100px',
        margin: '0 auto',
        padding: '0 2rem',
        height: '64px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        <span style={{
          background: 'linear-gradient(135deg, #a78bfa 0%, #60a5fa 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          fontWeight: 700,
          fontSize: '1.1rem',
          letterSpacing: '-0.02em',
          cursor: 'default',
          userSelect: 'none',
        }}>
          Andy Wu
        </span>

        <div style={{ display: 'flex', gap: '2.5rem', listStyle: 'none', margin: 0, padding: 0 }}>
          {NAV_LINKS.map(({ name, id }) => (
            <Link
              key={id}
              to={id}
              smooth
              spy
              offset={-64}
              duration={500}
              activeClass="nav-active"
              style={{
                color: '#64748b',
                cursor: 'pointer',
                fontSize: '0.875rem',
                fontWeight: 500,
                letterSpacing: '0.01em',
                transition: 'color 0.2s',
                textDecoration: 'none',
              }}
            >
              {name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
