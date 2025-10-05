import { motion } from "framer-motion";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>Welcome to Agency AI</h1>
        <p>We build next-gen experiences powered by design and innovation.</p>
        <motion.button whileHover={{ scale: 1.1 }}>Get Started</motion.button>
      </motion.div>
    </section>
  );
}

export default Hero;
