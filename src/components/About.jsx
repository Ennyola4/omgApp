import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../css/about.css';

const About = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleSignUpPageClick = () => {
    setIsLoading(true);
    setTimeout(() => navigate('/AboutUs'), 1000);
  };

  // Images for carousel
  const carouselImages = [
    "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  ];

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
      className="about-container"
      initial="hidden"
      animate="show"
      variants={container}
    >
      {/* Animated Background */}
      <div className="animated-background"></div>
      
      <div className="about-content">
        {/* Carousel Section */}
        <motion.div 
          className="carousel-section"
          variants={item}
        >
          <Carousel
            showArrows={true}
            showThumbs={false}
            showStatus={false}
            infiniteLoop={true}
            autoPlay={true}
            interval={5000}
            transitionTime={1000}
            swipeable={true}
            emulateTouch={true}
            className="modern-carousel"
          >
            {carouselImages.map((img, index) => (
              <div key={index} className="carousel-slide">
                <img 
                  src={img} 
                  alt={`Slide ${index}`} 
                  loading="lazy"
                />
                <div className="slide-overlay"></div>
              </div>
            ))}
          </Carousel>
        </motion.div>

        {/* Text Content Section */}
        <motion.div 
          className="text-section"
          variants={item}
        >
          <motion.h4 
            className="subtitle"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Innovating media to standard
          </motion.h4>
          
          <motion.h1 
            className="title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            About <span>Us</span>
          </motion.h1>
          
          <motion.p 
            className="description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            We are a passionate team dedicated to revolutionizing media production. With cutting-edge technology and creative vision, we deliver exceptional content that captivates audiences worldwide. Our expertise spans film production, digital media, and innovative storytelling techniques that set new industry standards.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <motion.button
              className="more-button"
              onClick={handleSignUpPageClick}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 5px 15px rgba(226, 10, 10, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              {isLoading ? (
                <span className="button-loader"></span>
              ) : (
                <>
                  LEARN MORE
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </>
              )}
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;