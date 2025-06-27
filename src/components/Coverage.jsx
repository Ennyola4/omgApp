import React from 'react';
import { motion } from 'framer-motion';
import imageSeven from '../images/imageSeven.jpg';
import imageSix from '../images/imageSix.jpg';
import imageSixteen from '../images/imageSixteen.jpg';
import imageEleven from '../images/imageEleven.jpg';
import imageFour from '../images/imageFour.jpg';
import '../css/coverage.css';


const Coverage = () => {
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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const hoverVariants = {
    hover: {
      y: -10,
      boxShadow: "0 15px 30px rgba(203, 186, 2, 0.3)",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const coverageItems = [
    {
      image: imageFour,
      title: "Chief Dele 60th Birthday",
      description: "Celebrating a milestone with elegance and style. Our team captured every special moment of this grand celebration.",
      className: "large-card",
      color: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
      image: imageSix,
      title: "First Bank Opening",
      description: "Documenting the launch of a new financial institution with precision and professionalism.",
      className: "large-card",
      color: "linear-gradient(135deg, #ff758c 0%, #ff7eb3 100%)"
    },
    {
      image: imageSeven,
      title: "Community Outreach",
      description: "The Community Relations Unit creates and strengthens relationships through meaningful engagement.",
      className: "regular-card",
      color: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
    },
    {
      image: imageSixteen,
      title: "Educational Program",
      description: "Fostering learning and development through our specialized educational initiatives.",
      className: "regular-card",
      color: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
    },
    {
      image: imageEleven,
      title: "Corporate Event",
      description: "Professional coverage for business gatherings that demand excellence and attention to detail.",
      className: "regular-card",
      color: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
    },
     {
      image: imageEleven,
      title: "Corporate Event",
      description: "Professional coverage for business gatherings that demand excellence and attention to detail.",
      className: "regular-card",
      color: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
    }
  ];

  return (
    <motion.div 
      className="coverage-container"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h1 
        className="coverage-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Our Coverage
      </motion.h1>
      
      <motion.p 
        className="coverage-subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Capturing moments that matter with professionalism and creativity
      </motion.p>

      <div className="coverage-grid">
        {coverageItems.map((item, index) => (
          <motion.div
            key={index}
            className={`coverage-item ${item.className}`}
            variants={itemVariants}
            whileHover="hover"
            style={{ background: item.color }}
          >
            <div className="image-container">
              <img 
                src={item.image} 
                alt={item.title} 
                className="coverage-image"
                loading="lazy"
              />
              <div className="image-overlay"></div>
            </div>
            <div className="content-container">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <motion.button
                className="view-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Gallery
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Coverage;