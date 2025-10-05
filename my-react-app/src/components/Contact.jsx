import './Contact.css';

function Contact() {
  return (
    <section className="contact" id="contact">
      <h2>Contact Us</h2>
      <p>We’d love to hear from you! Send us a message and we’ll get back to you soon.</p>

      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="5" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
