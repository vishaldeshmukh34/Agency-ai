import './Services.css';

function Services() {
  return (
    <section className="services">
      <div className="services-header">
        <h2>Our Services</h2>
        <p>We provide high-quality solutions to help your business grow and stand out online.</p>
      </div>

      <div className="service-grid">
        <div className="service-card">
          <h3>Web Design</h3>
          <p>Modern and user-friendly website designs tailored to your brand and audience.</p>
        </div>

        <div className="service-card">
          <h3>Web Development</h3>
          <p>Responsive, fast, and scalable websites built with the latest web technologies.</p>
        </div>

        <div className="service-card">
          <h3>UI / UX Design</h3>
          <p>Intuitive and visually appealing interfaces focused on enhancing user experience.</p>
        </div>

        <div className="service-card">
          <h3>SEO Optimization</h3>
          <p>Boost your website visibility and attract more visitors with optimized SEO strategies.</p>
        </div>
      </div>
    </section>
  );
}

export default Services;
