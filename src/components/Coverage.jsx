import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowRight, FiFilter } from 'react-icons/fi';
import { FaSearchPlus, FaCalendarAlt, FaMapMarkerAlt, FaPlay, FaImages, FaVideo } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import imageSeven from '../images/imageSeven.jpg';
import imageSix from '../images/imageSix.jpg';
import imageSixteen from '../images/imageSixteen.jpg';
import imageEleven from '../images/imageEleven.jpg';
import '../css/coverage.css';

const Coverage = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showFilters, setShowFilters] = useState(false);

  const filters = ['All', 'Corporate', 'Social', 'Community', 'Awards'];
  
  const coverageItems = [
    {
      id: 3,
      image: imageSeven,
      title: "Community Health Outreach Program",
      description: "Documenting the impactful health initiative providing free medical services to underserved communities in the Niger Delta region.",
      date: "April 5, 2023",
      location: "Port Harcourt Township",
      galleryCount: 276,
      videoCount: 3,
      category: "Community",
      color: "#43e97b"
    },
    {
      id: 4,
      image: imageSixteen,
      title: "Youth Educational Empowerment Summit",
      description: "Coverage of the annual gathering bringing together educators, policymakers, and students to discuss innovations in learning.",
      date: "February 18, 2023",
      location: "University of Ibadan Conference Centre",
      galleryCount: 165,
      videoCount: 4,
      category: "Community",
      color: "#fa709a"
    },
    {
      id: 5,
      image: imageEleven,
      title: "Tech Innovation Awards 2023",
      description: "Red carpet arrivals, award presentations, and behind-the-scenes moments from Nigeria's premier technology recognition event.",
      date: "January 30, 2023",
      location: "Landmark Event Centre, Lagos",
      galleryCount: 412,
      videoCount: 7,
      category: "Awards",
      color: "#4facfe"
    },
    {
      id: 6,
      image: imageSix,
      title: "Annual Financial Markets Conference",
      description: "Multi-camera coverage of keynote speeches, panel discussions, and networking sessions at this premier industry event.",
      date: "June 12, 2023",
      location: "Eko Hotels & Suites, Lagos",
      galleryCount: 243,
      videoCount: 6,
      category: "Corporate",
      color: "#a18cd1"
    },
    {
      id: 7,
      image: imageEleven,
      title: "Tech Expo Africa 2023",
      description: "Showcasing the latest technological innovations from across the continent with interactive exhibits and demonstrations.",
      date: "March 8, 2023",
      location: "International Conference Centre, Abuja",
      galleryCount: 387,
      videoCount: 9,
      category: "Corporate",
      color: "#ff758c"
    },
    {
      id: 8,
      image: imageSeven,
      title: "Women Leadership Forum",
      description: "Empowering women leaders through insightful discussions and networking opportunities at this annual gathering.",
      date: "May 20, 2023",
      location: "Sheraton Hotel, Lagos",
      galleryCount: 215,
      videoCount: 5,
      category: "Social",
      color: "#667eea"
    }
  ];

  const filteredItems = coverageItems.filter(item => 
    activeFilter === 'All' || item.category === activeFilter
  );

  const openEventModal = (event) => {
    setSelectedEvent(event);
    document.body.style.overflow = 'hidden';
  };

  const closeEventModal = () => {
    setSelectedEvent(null);
    document.body.style.overflow = 'auto';
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.4,
        type: "spring",
        damping: 25
      }
    },
    exit: { opacity: 0, scale: 0.9 }
  };

  const filterVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { 
      opacity: 1, 
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    exit: { opacity: 0, height: 0 }
  };

  return (
    <div className="new-coverage-container">
      {/* Parallax Hero Section */}
      <section className="parallax-hero">
        <div className="parallax-content">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-title"
          >
            Our <span>Event</span> Coverage
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="hero-subtitle"
          >
            Capturing moments that tell your story with cinematic brilliance
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="scroll-indicator"
          >
            {/* <div className="scroll-line"></div>
            <span>Scroll to explore</span> */}
          </motion.div>
        </div>
        <div className="parallax-overlay"></div>
        <div className="parallax-image"></div>
      </section>

      {/* Main Content */}
      <main className="coverage-main">
        <div className="container">
          {/* Filter Section */}
          <motion.section 
            className="filter-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <div className="filter-header">
              <h2>Our Event Portfolio</h2>
              <p>Browse through our collection of professionally captured events</p>
              
              <button 
                className="mobile-filter-btn"
                onClick={() => setShowFilters(!showFilters)}
              >
                <FiFilter /> {activeFilter}
              </button>
            </div>

            <AnimatePresence>
              {showFilters && (
                <motion.div
                  className="mobile-filters"
                  variants={filterVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  {filters.map(filter => (
                    <button
                      key={`mobile-${filter}`}
                      className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
                      onClick={() => {
                        setActiveFilter(filter);
                        setShowFilters(false);
                      }}
                    >
                      {filter}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            <div className="desktop-filters">
              {filters.map(filter => (
                <motion.button
                  key={filter}
                  className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
                  onClick={() => setActiveFilter(filter)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {filter}
                </motion.button>
              ))}
            </div>
          </motion.section>

          {/* Event Grid */}
          <motion.div
            className="event-grid"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <AnimatePresence>
              {filteredItems.map((item) => (
                <motion.article
                  key={item.id}
                  className="event-card"
                  variants={itemVariants}
                  whileHover="hover"
                  onClick={() => openEventModal(item)}
                  layout
                >
                  <div className="card-image" style={{ backgroundImage: `url(${item.image})` }}>
                    <div className="card-badge" style={{ backgroundColor: item.color }}>
                      {item.category}
                    </div>
                    <div className="card-overlay" style={{ background: `linear-gradient(to top, ${item.color} 5%, transparent 30%)` }}></div>
                    <div className="card-meta">
                      <span><FaCalendarAlt /> {item.date}</span>
                      <span><FaMapMarkerAlt /> {item.location}</span>
                    </div>
                  </div>
                  <div className="card-content">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <div className="media-stats">
                      <span><FaImages /> {item.galleryCount} Photos</span>
                      <span><FaVideo /> {item.videoCount} Videos</span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* CTA Section */}
          <motion.section
            className="cta-section"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <div className="cta-content">
              <h2>Ready to Document Your Next Event?</h2>
              <p>Our team specializes in capturing the essence of your occasion with professional photography and videography services.</p>
              <div className="ctas-buttons">
                <motion.button
                  className="primary-btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Book Our Services
                </motion.button>
                <motion.button
                  className="secondary-btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Pricing
                </motion.button>
              </div>
            </div>
          </motion.section>
        </div>
      </main>

      {/* Event Modal */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            className="event-modal"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={modalVariants}
          >
            <div className="modal-overlay" onClick={closeEventModal}></div>
            <div className="modal-container">
              <button className="close-btn" onClick={closeEventModal}>
                <IoMdClose />
              </button>
              
              <div className="modal-image" style={{ backgroundImage: `url(${selectedEvent.image})` }}>
                <div className="modal-badge" style={{ backgroundColor: selectedEvent.color }}>
                  {selectedEvent.category}
                </div>
              </div>
              
              <div className="modal-content">
                <h3>{selectedEvent.title}</h3>
                <div className="modal-meta">
                  <span><FaCalendarAlt /> {selectedEvent.date}</span>
                  <span><FaMapMarkerAlt /> {selectedEvent.location}</span>
                </div>
                <p>{selectedEvent.description}</p>
                
                <div className="modal-stats">
                  <div className="stat-item">
                    <FaImages />
                    <div>
                      <strong>{selectedEvent.galleryCount}</strong>
                      <span>High-res Photos</span>
                    </div>
                  </div>
                  <div className="stat-item">
                    <FaVideo />
                    <div>
                      <strong>{selectedEvent.videoCount}</strong>
                      <span>Professional Videos</span>
                    </div>
                  </div>
                </div>
                
                <div className="modal-actions">
                  <motion.button
                    className="gallery-btn"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    View Full Gallery <FiArrowRight />
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Coverage;