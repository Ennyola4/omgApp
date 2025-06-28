import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaMicrophone } from "react-icons/fa6";
import { ImFacebook2 } from "react-icons/im";
import { TfiYoutube } from "react-icons/tfi";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import imageSeventeen from '../images/imageSeventeen.jpg';
import '../css/home.css';

const HomePagePics = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [isHovered, setIsHovered] = useState(false);

  // Date formatting
  const currentDate = new Date();
  const day = currentDate.toLocaleString('default', { weekday: 'short' });
  const date = currentDate.getDate();
  const month = currentDate.toLocaleString('default', { month: 'short' });
  const year = currentDate.getFullYear();

  const handleSignUpPageClick = () => {
    setIsLoading(true);
    setTimeout(() => navigate('/SignUpPage'), 2000);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
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

  const buttonVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.05 },
    tap: { scale: 0.95 }
  };

  return (
    <div className="home-container">
      <div className="gradient-overlay"></div>
      
      <motion.div 
        className="hero-content"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h1 variants={itemVariants}>
          Your lens to the <span className="highlight">media world</span>
        </motion.h1>
        
        <motion.p variants={itemVariants}>
          Unfiltered, Unmatched, Unstoppable
        </motion.p>
        
        <motion.div 
          className="date-display"
          variants={itemVariants}
        >
          {`${day}, ${month} ${date}, ${year}`}
        </motion.div>

        <motion.div 
          className="time-section"
          variants={itemVariants}
        >
          <div className="time-display">
            {time.split(':').map((part, i) => (
              <span key={i} className="time-part">
                {part}
                {i < 2 && <span className="time-colon">:</span>}
              </span>
            ))}
          </div>
          
          <motion.button
            className="login-btn"
            onClick={handleSignUpPageClick}
            disabled={isLoading}
            variants={buttonVariants}
            initial="rest"
            whileHover="hover"
            whileTap="tap"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
          >
            <AnimatePresence mode="wait">
              {isLoading ? (
                <motion.span 
                  className="loader"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />
              ) : (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  LOG IN TO BLOG
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </motion.div>

        <motion.div 
          className="social-links"
          variants={itemVariants}
        >
          <a href="#" aria-label="Facebook"><ImFacebook2 /></a>
          <a href="#" aria-label="YouTube"><TfiYoutube /></a>
          <a href="#" aria-label="Twitter"><BsTwitterX /></a>
          <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
          <a href="#" aria-label="Instagram"><FaSquareInstagram /></a>
        </motion.div>
      </motion.div>

      <div className="scrolling-indicator">
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          Scroll down
        </motion.div>
      </div>
    </div>
  );
};

export default HomePagePics;