import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import imageSixteen from '../images/imageSixteen.jpg';
import { Link } from "react-router-dom";
import '../css/nav.css';
import { ImFacebook2 } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import { BsTwitterX } from "react-icons/bs";
import { TfiYoutube } from "react-icons/tfi";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const closeMobileMenu = () => {
    if (window.innerWidth <= 768) {
      setIsOpen(false);
    }
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
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Logo with image */}
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <div className="logo-container">
            <img src={imageSixteen} className="logo-image" alt="Ovation Media Group Logo" />
            <span className="logo-text" >Ovation Media Group</span>
          </div>
        </Link>

        {/* Mobile menu icon */}
        <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Navigation menu */}
        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contactus" className="nav-links" onClick={closeMobileMenu}>
              Contact Us
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/services" className="nav-links" onClick={closeMobileMenu}>
              Services
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-links" onClick={closeMobileMenu}>
              Contact
            </Link>
          </li>
          <div className='socialIcons'>
            <a href="#" className='m-2' ><ImFacebook2 size="3vh" /></a>
            <a href="#" className='m-2'><BsTwitterX size="3vh" /></a>
            <a href="#" className='m-2'><FaLinkedin size="3.1vh"  /></a>
            <a href="#" className='m-2' ><FaSquareInstagram size="3.1vh" /></a>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;