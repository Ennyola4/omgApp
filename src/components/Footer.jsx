import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { MdEmail, MdLocationOn, MdPhone } from 'react-icons/md';
import { useLocation } from 'react-router-dom';
import '../css/footer.css';

const Footer = () => {
  const location = useLocation();
  const currentYear = new Date().getFullYear();
  
  // Define hidden routes
  const hiddenRoutes = ['/signinpage', '/signuppage'];
  const shouldHideFooter = hiddenRoutes.includes(location.pathname.toLowerCase());

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  if (shouldHideFooter) {
    return null;
  }

  return (
    <motion.footer 
      className="footer"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="footer-container">
        <div className="footer-row">
          {/* About Column */}
          <motion.div className="footer-col" variants={itemVariants}>
            <h4>About</h4>
            <p className="footer-description">
              Your premier destination for unfiltered media insights and cutting-edge journalism.
            </p>
            <div className="contact-info">
              <div className="contact-item">
                <MdLocationOn className="contact-icon" />
                <span>123 Media St, Digital City</span>
              </div>
              <div className="contact-item">
                <MdPhone className="contact-icon" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="contact-item">
                <MdEmail className="contact-icon" />
                <span>info@medialens.com</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links Column */}
          <motion.div className="footer-col" variants={itemVariants}>
            <h4>Quick Links</h4>
            <ul className="links">
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </motion.div>

          {/* Services Column */}
          <motion.div className="footer-col" variants={itemVariants}>
            <h4>Our Services</h4>
            <ul className="links">
              <li><a href="#">Media Analysis</a></li>
              <li><a href="#">Content Creation</a></li>
              <li><a href="#">Digital Strategy</a></li>
              <li><a href="#">Social Media</a></li>
              <li><a href="#">Video Production</a></li>
            </ul>
          </motion.div>

          {/* Newsletter Column */}
          <motion.div className="footer-col" variants={itemVariants}>
            <h4>Newsletter</h4>
            <p>Subscribe to our newsletter for the latest updates.</p>
            <div className="social-icons">
              <a href="#" aria-label="Facebook"><FaFacebook /></a>
              <a href="#" aria-label="Twitter"><FaTwitter /></a>
              <a href="#" aria-label="Instagram"><FaInstagram /></a>
              <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
              <a href="#" aria-label="YouTube"><FaYoutube /></a>
            </div> <br />
          <h1>
            <span className="footer-logo">Ovation Media Group</span>
          </h1>
          </motion.div>
        </div>
      

        <motion.div 
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p>&copy; {currentYear} OvationMedia. All rights reserved.</p>
          <div className="legal-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookies Policy</a>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;