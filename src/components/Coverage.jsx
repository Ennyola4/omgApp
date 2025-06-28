import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import { FaSearchPlus, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
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
        staggerChildren: 0.15,
        delayChildren: 0.2
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
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  const hoverVariants = {
    hover: {
      y: -10,
      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)",
      transition: {
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  const coverageItems = [
    {
      image: imageFour,
      title: "Chief Dele 60th Birthday",
      description: "Celebrating a milestone with elegance and style. Our team captured every special moment of this grand celebration.",
      date: "May 15, 2023",
      location: "Lagos, Nigeria",
      galleryCount: 124,
      className: "large-card",
      color: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
      image: imageSix,
      title: "First Bank Opening",
      description: "Documenting the launch of a new financial institution with precision and professionalism.",
      date: "March 22, 2023",
      location: "Abuja, Nigeria",
      galleryCount: 89,
      className: "large-card",
      color: "linear-gradient(135deg, #ff758c 0%, #ff7eb3 100%)"
    },
    {
      image: imageSeven,
      title: "Community Outreach",
      description: "The Community Relations Unit creates and strengthens relationships through meaningful engagement.",
      date: "April 5, 2023",
      location: "Port Harcourt, Nigeria",
      galleryCount: 76,
      className: "regular-card",
      color: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
    },
    {
      image: imageSixteen,
      title: "Educational Program",
      description: "Fostering learning and development through our specialized educational initiatives.",
      date: "February 18, 2023",
      location: "Ibadan, Nigeria",
      galleryCount: 65,
      className: "regular-card",
      color: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
    },
    {
      image: imageEleven,
      title: "Corporate Event",
      description: "Professional coverage for business gatherings that demand excellence and attention to detail.",
      date: "January 30, 2023",
      location: "Lekki, Nigeria",
      galleryCount: 112,
      className: "regular-card",
      color: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
    },
    {
      image: imageEleven,
      title: "Annual Conference",
      description: "Comprehensive coverage of the industry's leading annual gathering of professionals.",
      date: "June 12, 2023",
      location: "Victoria Island, Nigeria",
      galleryCount: 143,
      className: "regular-card",
      color: "linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)"
    }
  ];

  return (
    <motion.div 
      className="coverage-container"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="coverage-header">
        <motion.h1 
          className="coverage-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Event Coverage
        </motion.h1>
        
        <motion.p 
          className="coverage-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Professional photography and videography services for all your special moments
        </motion.p>

        <motion.div
          className="filter-controls"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <button className="filter-btn active">All Events</button>
          <button className="filter-btn">Corporate</button>
          <button className="filter-btn">Social</button>
          <button className="filter-btn">Community</button>
        </motion.div>
      </div>

      <div className="coverage-grid">
        {coverageItems.map((item, index) => (
          <motion.div
            key={index}
            className={`coverage-item ${item.className}`}
            variants={itemVariants}
            whileHover="hover"
          >
            <div className="image-container">
              <img 
                src={item.image} 
                alt={item.title} 
                className="coverage-image"
                loading="lazy"
              />
              <div className="image-overlay" style={{ background: item.color }}></div>
              <div className="image-meta">
                <span className="meta-item">
                  <FaCalendarAlt /> {item.date}
                </span>
                <span className="meta-item">
                  <FaMapMarkerAlt /> {item.location}
                </span>
              </div>
              <div className="gallery-count">
                <FaSearchPlus /> {item.galleryCount}+ Photos
              </div>
            </div>
            <div className="content-container">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <div className="item-footer">
                <motion.button
                  className="view-button"
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: "rgba(255,255,255,0.2)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Gallery
                  <FiArrowRight className="arrow-icon" />
                </motion.button>
                <button className="quick-view">
                  Quick View
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div 
        className="cta-section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <h3>Need coverage for your next event?</h3>
        <p>Contact us today to discuss your photography and videography needs</p>
        <motion.button
          className="cta-button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get a Quote
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default Coverage;