import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';
import { FaPaperPlane } from 'react-icons/fa';
import '../css/contact.css';
import aos from 'aos'
import 'aos/dist/aos.css'
import 'aos/dist/aos.js'

const Contact = () => {
 useEffect(() => {
 
     aos.init({
       duration: 1000
     })
   }, [])

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      className="contact-container"
      initial="hidden"
      animate="show"
      variants={container}
    >
      {/* Hero Section */}
      <div className="contact-hero">
        <motion.div 
          className="hero-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Get In Touch
        </motion.h1>
      </div>

      {/* Contact Content */}
      <div className="contact-content">
        {/* Contact Info */}
        <motion.div 
          className="contact-info"
          variants={item}
        >
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Contact Information
          </motion.h2>
          
          <motion.div 
            className="info-item"
            whileHover={{ x: 10 }}
          >
            <div className="icon-container">
              <MdEmail className="icon" />
            </div>
            <div>
              <h3>Email</h3>
              <p>enny@gmail.com</p>
            </div>
          </motion.div>
          
          <motion.div 
            className="info-item"
            whileHover={{ x: 10 }}
          >
            <div className="icon-container">
              <MdPhone className="icon" />
            </div>
            <div>
              <h3>Phone</h3>
              <p>08102656596</p>
            </div>
          </motion.div>
          
          <motion.div 
            className="info-item"
            whileHover={{ x: 10 }}
          >
            <div className="icon-container">
              <MdLocationOn className="icon" />
            </div>
            <div>
              <h3>Address</h3>
              <p>No 4 Lola Fadeyibi Street, Lagos</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Contact Form */}
        <motion.div 
          className="contact-form"
          variants={item}
        >
          <motion.h2
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Send Us a Message
          </motion.h2>
          
          <form>
            <motion.div 
              className="form-group"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <input type="text" id="name" required />
              <label htmlFor="name">Your Name</label>
            </motion.div>
            
            <motion.div 
              className="form-group"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <input type="email" id="email" required />
              <label htmlFor="email">Your Email</label>
            </motion.div>
            
            <motion.div 
              className="form-group"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              <textarea id="message" rows="5" required></textarea>
              <label htmlFor="message">Your Message</label>
            </motion.div>
            
            <motion.button
              type="submit"
              className="submit-btn"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 5px 15px rgba(0,0,0,0.2)"
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              Send Message <FaPaperPlane className="send-icon" />
            </motion.button>
          </form>
        </motion.div>
      </div>

      {/* Map Section */}
      <motion.div 
        className="map-container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.585156690981!2d3.379278315393246!3d6.453974325540282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1620000000000!5m2!1sen!2sng"
          allowFullScreen=""
          loading="lazy"
          title="Location Map"
        ></iframe>
      </motion.div>
    </motion.div>
  );
};

export default Contact;