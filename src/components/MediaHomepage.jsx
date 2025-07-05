import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaMicrophone, FaPlay, FaArrowRight } from "react-icons/fa";
import { ImFacebook2 } from "react-icons/im";
import { TfiYoutube } from "react-icons/tfi";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin, FaRegCalendarAlt } from "react-icons/fa";
import { FaSquareInstagram, FaRegClock } from "react-icons/fa6";
import imageThirteen from "../images/imageThirteen.jpg";
import imageFourteen from "../images/imageFourteen.jpg";
import imageSix from "../images/imageSix.jpg";
import '../css/mediahomepage.css';

const MediaHomepage = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [activeFeature, setActiveFeature] = useState(0);

  // Date formatting
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });

  const features = [
    {
      title: "Live Broadcasts",
      description: "24/7 streaming of global events",
      icon: <FaMicrophone />
    },
    {
      title: "Exclusive Content",
      description: "Behind-the-scenes access",
      icon: <FaPlay />
    },
    {
      title: "Breaking News",
      description: "Real-time updates worldwide",
      icon: <FaArrowRight />
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    const featureInterval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 3000);

    return () => {
      clearInterval(interval);
      clearInterval(featureInterval);
    };
  }, []);

  const handleSignUpClick = () => {
    setIsLoading(true);
    setTimeout(() => navigate('/SignUpPage'), 1500);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
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

  const featureVariants = {
    enter: { opacity: 0, x: 50 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 }
  };

  return (
    <div className="media-homepage">
      {/* Animated Background Elements */}
      <div className="particle-background">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="particle"
            initial={{ opacity: 0, y: -100 }}
            animate={{
              opacity: [0, 0.5, 0],
              y: [0, window.innerHeight],
              x: Math.random() * 400 - 200
            }}
            transition={{
              duration: 5 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>

      {/* Floating Images */}
      <motion.div 
        className="floating-image-1"
        initial={{ y: -50, x: -50, rotate: -5 }}
        animate={{ 
          y: [0, -20, 0],
          rotate: [-15, 5, -15]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <img src={imageFourteen} alt="Media production" />
      </motion.div>

      <motion.div 
        className="floating-image-2"
        initial={{ y: -50, x: -50, rotate: -5 }}
        animate={{ 
          y: [0, -20, 0],
          rotate: [-15, 5, -15]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <img src={imageSix} alt="News team" />
      </motion.div>

      {/* Main Content */}
      <motion.div 
        className="hero-container"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="hero-overlay"></div>
        
        <div className="hero-content">
          {/* Header */}
          {/* <motion.header variants={itemVariants}>
            <div className="logo">Ovation Media Group</div>
            <nav>
              <button className="nav-btn">About</button>
              <button className="nav-btn">Services</button>
              <button className="nav-btn">Contact</button>
            </nav>
          </motion.header> */}

          {/* Main Hero Text */}
          <div className="hero-text">
            <motion.h1 variants={itemVariants}>
              <span className="gradient-text">Redefining Media Excellence </span> 
            </motion.h1>
            <motion.p variants={itemVariants}>
              Where innovation meets storytelling in the digital age
            </motion.p>
          </div>

          {/* Date and Time */}
          <motion.div className="datetime-display" variants={itemVariants}>
            <div className="date">
              <FaRegCalendarAlt className="icon" />
              <span>{formattedDate}</span>
            </div>
            <div className="time">
              <FaRegClock className="icon" />
              <span>{time}</span>
            </div>
          </motion.div>

          {/* Features Carousel */}
          <div className="features-container">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFeature}
                variants={featureVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5 }}
                className="feature-card"
              >
                <div className="feature-icon">{features[activeFeature].icon}</div>
                <h3>{features[activeFeature].title}</h3>
                <p>{features[activeFeature].description}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* CTA Button */}
          <motion.div variants={itemVariants}>
            <motion.button
              className="cta-btn"
              onClick={handleSignUpClick}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 5px 15px rgba(226, 10, 10, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              {isLoading ? (
                <span className="button-loader"></span>
              ) : (
                "Join Our Network"
              )}
            </motion.button>
          </motion.div>

          {/* Social Links */}
          {/* <motion.div className="social-links" variants={itemVariants}>
            <a href="#" aria-label="Facebook"><ImFacebook2 /></a>
            <a href="#" aria-label="YouTube"><TfiYoutube /></a>
            <a href="#" aria-label="Twitter"><BsTwitterX /></a>
            <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
            <a href="#" aria-label="Instagram"><FaSquareInstagram /></a>
          </motion.div> */}
        </div>
      </motion.div>

      {/* Scrolling Indicator */}
      <motion.div 
        className="scroll-indicator"
        animate={{
          y: [0, 50, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <span>Explore More</span>
        <div className="arrow-down"></div>
      </motion.div>
    </div>
  );
};

export default MediaHomepage;