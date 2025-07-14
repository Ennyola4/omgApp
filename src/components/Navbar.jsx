import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaSearch, FaChevronDown } from 'react-icons/fa';
import { ImFacebook2 } from 'react-icons/im';
import { MdEmail } from 'react-icons/md';
import { BsTwitterX } from 'react-icons/bs';
import { TfiYoutube } from 'react-icons/tfi';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';
import { Link, useLocation } from "react-router-dom";
import imageSixteen from '../images/imageSixteen.jpg';
import '../css/nav.css';

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const submenuRef = useRef(null);

  // Define hidden routes
  const hiddenRoutes = ['/signinpage', '/signuppage'];
  const shouldHideNavbar = hiddenRoutes.includes(location.pathname.toLowerCase());

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
      setActiveSubmenu(null);
    }
  };

  const closeMobileMenu = () => {
    setIsOpen(false);
    setActiveSubmenu(null);
    document.body.style.overflow = 'auto';
  };

  const toggleSubmenu = (index) => {
    setActiveSubmenu(activeSubmenu === index ? null : index);
  };

  // Close submenu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (submenuRef.current && !submenuRef.current.contains(event.target)) {
        setActiveSubmenu(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

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

  const submenuVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: {
      height: 'auto',
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    exit: { height: 0, opacity: 0 }
  };

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    {
      path: "/mediaservices", label: "Services",
      submenu: [
        {path : "/mediaservices", label : "Our Services"},
        { path: "/video-production", label: "Video Production" },
        { path: "/photography", label: "Photography" },
        { path: "/social-media", label: "Social Media Management" }
      ]
    },
    { path: "/mediacontactpage", label: "Contact Us" }
  ];

  const socialIcons = [
    { icon: <ImFacebook2 />, url: "#", name: "Facebook" },
    { icon: <BsTwitterX />, url: "#", name: "Twitter" },
    { icon: <FaLinkedin />, url: "#", name: "LinkedIn" },
    { icon: <FaInstagram />, url: "#", name: "Instagram" },
    { icon: <TfiYoutube />, url: "#", name: "YouTube" },
    { icon: <MdEmail />, url: "mailto:contact@ovationmedia.com", name: "Email" }
  ];

  if (shouldHideNavbar) {
    return null;
  }

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
          <div className="mobile-header">
            <div className="mobile-logo">
             <Link to='/' onClick={closeMobileMenu}>
              <img
                src={imageSixteen}
                className="logo-image"
                alt="Ovation Media Group Logo"
              />
             </Link>
              <span className="logo-texts">Ovation Media Group</span>
            </div>
          </div>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="desktop-nav">
          <ul className="nav-menu">
            {navLinks.map((link, index) => (
              <motion.li
                key={link.path}
                className={`nav-item ${link.submenu ? 'has-submenu' : ''}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                custom={index}
                initial="hidden"
                animate="visible"
                variants={itemVariants}
                ref={link.submenu ? submenuRef : null}
              >
                <Link
                  to={link.path}
                  className="nav-links"
                  onClick={(e) => {
                    if (link.submenu) {
                      e.preventDefault();
                      toggleSubmenu(index);
                    } else {
                      closeMobileMenu();
                    }
                  }}
                >
                  {link.label}
                  {link.submenu && <FaChevronDown className={`submenu-icon ${activeSubmenu === index ? 'rotate' : ''}`} />}
                </Link>

                {link.submenu && (
                  <AnimatePresence>
                    {(activeSubmenu === index) && (
                      <motion.div
                        className="submenu"
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={submenuVariants}
                      >
                        {link.submenu.map((subItem) => (
                          <Link
                            key={subItem.path}
                            to={subItem.path}
                            className="submenu-item"
                            onClick={closeMobileMenu}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </motion.li>
            ))}
          </ul>

          <div className="nav-actions">
            <motion.button
              className="search-button"
              onClick={() => setSearchOpen(!searchOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Search"
            >
              <FaSearch />
            </motion.button>
            <motion.button
              className="cta-button"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
                backgroundColor: "#1a365d"
              }}
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
          aria-label={isOpen ? "Close menu" : "Open menu"}
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
                <div className="mobile-header">
                  <div className="mobile-logo">
                    <img
                      src={imageSixteen}
                      className="logo-image"
                      alt="Ovation Media Group Logo"
                    />
                    <span className="logo-texts">Ovation Media Group</span>
                  </div>
                </div>

                <div className="mobile-search">
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  {/* <button className="mobile-search-button">
                    <FaSearch className="search-icon" />
                  </button> */}
                </div>

                <ul className="mobile-nav-menu">
                  {navLinks.map((link, index) => (
                    <React.Fragment key={link.path}>
                      <motion.li
                        className={`mobile-nav-item ${link.submenu ? 'has-submenu' : ''}`}
                        custom={index}
                        initial="hidden"
                        animate="visible"
                        variants={itemVariants}
                      >
                        <Link
                          to={link.path}
                          className="mobile-nav-links"
                          onClick={!link.submenu ? closeMobileMenu : (e) => {
                            e.preventDefault();
                            toggleSubmenu(index);
                          }}
                        >
                          {link.label}
                          {link.submenu && (
                            <button
                              className="mobile-submenu-toggle"
                              onClick={(e) => {
                                e.stopPropagation();
                                toggleSubmenu(index);
                              }}
                              aria-expanded={activeSubmenu === index}
                              aria-label={`Toggle ${link.label} submenu`}
                            >
                              <FaChevronDown className={`submenu-icon ${activeSubmenu === index ? 'open' : ''}`} />
                            </button>
                          )}
                        </Link>

                        {link.submenu && (
                          <AnimatePresence>
                            {activeSubmenu === index && (
                              <motion.ul
                                className="mobile-submenu"
                                variants={submenuVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                              >
                                {link.submenu.map((subItem) => (
                                  <li key={subItem.path}>
                                    <Link
                                      to={subItem.path}
                                      className="mobile-submenu-item"
                                      onClick={closeMobileMenu}
                                    >
                                      {subItem.label}
                                    </Link>
                                  </li>
                                ))}
                              </motion.ul>
                            )}
                          </AnimatePresence>
                        )}
                      </motion.li>
                    </React.Fragment>
                  ))}
                </ul>

                <div className="mobile-cta">
                  <motion.button
                    className="mobile-cta-button"
                    whileHover={{
                      scale: 1.02,
                      backgroundColor: "#1a365d"
                    }}
                    whileTap={{ scale: 0.98 }}
                    onClick={closeMobileMenu}
                  >
                    Get Started
                  </motion.button>
                </div>

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
                      aria-label={social.name}
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
                className="search-container-two"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -50, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="search-input-wrapper">
                  <input
                    type="text"
                    placeholder="Search Ovation Media..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    autoFocus
                  />
                  <button
                    className="search-submit"
                    aria-label="Submit search"
                  >
                    <FaSearch />
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;