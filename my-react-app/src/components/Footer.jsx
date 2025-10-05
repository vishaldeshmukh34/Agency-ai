import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Agency AI. All rights reserved.</p>
      <div className="socials">
        <a href="#">🌐</a>
        <a href="#">🐦</a>
        <a href="#">📸</a>
      </div>
    </footer>
  );
}

export default Footer;
