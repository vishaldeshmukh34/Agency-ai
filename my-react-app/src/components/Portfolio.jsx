import './Portfolio.css';

function Portfolio() {
  return (
    <section className="portfolio">
      <div className="portfolio-header">
        <h2>Our Latest Projects</h2>
        <p>Take a look at some of our recent design and development work.</p>
      </div>

      <div className="portfolio-grid">
        <div className="portfolio-item">
          <img src="https://cdn.pixabay.com/photo/2016/11/29/09/32/office-1867762_1280.jpg" alt="Project 1" />
          <div className="overlay">
            <h3>Corporate Website</h3>
          </div>
        </div>

        <div className="portfolio-item">
          <img src="https://cdn.pixabay.com/photo/2015/01/08/18/25/startup-593327_1280.jpg" alt="Project 2" />
          <div className="overlay">
            <h3>Startup Landing Page</h3>
          </div>
        </div>

        <div className="portfolio-item">
          <img src="https://cdn.pixabay.com/photo/2015/01/09/11/09/office-593362_1280.jpg" alt="Project 3" />
          <div className="overlay">
            <h3>Product Showcase</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
