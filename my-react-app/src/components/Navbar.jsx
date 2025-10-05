import { useState } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">Agency<span>AI</span></div>

      <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <Link to="home" smooth duration={600} onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="services" smooth duration={600} onClick={() => setMenuOpen(false)}>Services</Link>
        <Link to="portfolio" smooth duration={600} onClick={() => setMenuOpen(false)}>Portfolio</Link>
        <Link to="team" smooth duration={600} onClick={() => setMenuOpen(false)}>Team</Link>
        <Link to="contact" smooth duration={600} onClick={() => setMenuOpen(false)}>Contact</Link>
      </div>

      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>
    </nav>
  );
}

export default Navbar;
