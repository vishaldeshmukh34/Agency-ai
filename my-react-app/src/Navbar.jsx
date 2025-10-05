import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">MyAgency</div>
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Portfolio</a></li>
        <li><a href="#">Team</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <button className="nav-btn">Get Started</button>
    </nav>
  );
}

export default Navbar;
