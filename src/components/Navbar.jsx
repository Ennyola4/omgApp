import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaSearch } from 'react-icons/fa';
import { ImFacebook2 } from 'react-icons/im';
import { MdEmail } from 'react-icons/md';
import { BsTwitterX } from 'react-icons/bs';
import { TfiYoutube } from 'react-icons/tfi';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';
import { Link } from "react-router-dom";
import imageSixteen from '../images/imageSixteen.jpg';
import '../css/nav.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  const closeMobileMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 5);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        closeMobileMenu();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Animation variants
  const menuVariants = {
    hidden: { x: '-100%', opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    },
    exit: { x: '-100%', opacity: 0 }
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: (i) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 200,
        damping: 15
      }
    })
  };

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/mediaservices", label: "Services" },
    { path: "/portfolio", label: "Portfolio" },
    { path: "/blog", label: "Blog" },
    { path: "/contact", label: "Contact" }
  ];

  const socialIcons = [
    { icon: <ImFacebook2 />, url: "#" },
    { icon: <BsTwitterX />, url: "#" },
    { icon: <FaLinkedin />, url: "#" },
    { icon: <FaInstagram />, url: "#" },
    { icon: <TfiYoutube />, url: "#" },
    { icon: <MdEmail />, url: "mailto:contact@ovationmedia.com" }
  ];

  return (
    <motion.nav 
      className={`navbar ${isScrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
    >
      <div className="navbar-container">
        {/* Logo */}
        <motion.div 
          className="logo-wrapper"
          whileHover={{ scale: 1.05 }}
        >
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <div className="logo-container">
              <motion.img 
                src={imageSixteen} 
                className="logo-image" 
                alt="Ovation Media Group Logo"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              />
              <motion.span 
                className="logo-text"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                Ovation Media Group
              </motion.span>
            </div>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="desktop-nav">
          <ul className="nav-menu">
            {navLinks.map((link, index) => (
              <motion.li 
                key={link.path}
                className="nav-item"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                custom={index}
                initial="hidden"
                animate="visible"
                variants={itemVariants}
              >
                <Link 
                  to={link.path} 
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  {link.label}
                </Link>
              </motion.li>
            ))}
          </ul>

          <div className="nav-actions">
            <motion.button 
              className="search-button"
              onClick={() => setSearchOpen(!searchOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaSearch />
            </motion.button>
            <motion.button 
              className="cta-button"
              whileHover={{ scale: 1.05, boxShadow: "0 5px 15px rgba(0,0,0,0.2)" }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <motion.div 
          className="menu-icon" 
          onClick={toggleMenu}
          whileTap={{ scale: 0.9 }}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </motion.div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              className="mobile-menu-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMobileMenu}
            >
              <motion.div 
                className="mobile-menu-content"
                variants={menuVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="mobile-search">
                  <input 
                    type="text" 
                    placeholder="Search..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <FaSearch className="search-icon" />
                </div>

                <ul className="mobile-nav-menu">
                  {navLinks.map((link, index) => (
                    <motion.li 
                      key={link.path}
                      className="mobile-nav-item"
                      custom={index}
                      initial="hidden"
                      animate="visible"
                      variants={itemVariants}
                      onClick={closeMobileMenu}
                    >
                      <Link 
                        to={link.path} 
                        className="mobile-nav-links"
                      >
                        {link.label}
                      </Link>
                    </motion.li>
                  ))}
                </ul>

                <div className="mobile-contact-info">
                  <h4>Contact Us</h4>
                  <p>Email: contact@ovationmedia.com</p>
                  <p>Phone: (123) 456-7890</p>
                  <p>Address: 123 Media Street, Digital City</p>
                </div>

                <div className="mobile-social-icons">
                  {socialIcons.map((social, index) => (
                    <motion.a 
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, y: -5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Search Overlay */}
        <AnimatePresence>
          {searchOpen && (
            <motion.div 
              className="search-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSearchOpen(false)}
            >
              <motion.div 
                className="search-container"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -50, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <input 
                  type="text" 
                  placeholder="Search Ovation Media..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                />
                <button className="search-submit">Search</button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;