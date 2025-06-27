import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
import '../css/contactuss.css'
import { MdEmail } from "react-icons/md";
import { FaPhoneFlip } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import aos from 'aos'
import 'aos/dist/aos.css'
import 'aos/dist/aos.js'





const ContactUs = () => {

  useEffect(() => {

    aos.init({
      duration: 1000
    })
  }, [])
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // Create floating particles effect
  useEffect(() => {
    const createParticle = () => {
      const particle = document.createElement('div');
      particle.className = 'particle';

      // Random properties
      const size = Math.random() * 20 + 10;
      const posX = Math.random() * window.innerWidth;
      const posY = Math.random() * window.innerHeight;
      const duration = Math.random() * 20 + 10;
      const delay = Math.random() * 1;
      const opacity = Math.random() * 0.3 + 0.1;

      particle.style.cssText = `
        width: ${size}px;
        height: ${size}px;
        left: ${posX}px;
        top: ${posY}px;
        animation-duration: ${duration}s;
        animation-delay: ${delay}s;
        opacity: ${opacity};
        background: rgba(52, 152, 219, ${opacity});
      `;

      document.querySelector('.particles-container').appendChild(particle);

      // Remove particle after animation completes
      setTimeout(() => {
        particle.remove();
      }, duration * 1000);
    };

    // Generate particles periodically
    const interval = setInterval(createParticle, 200);
    return () => clearInterval(interval);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <div className='bg-danger'>
      <div className="particles-container"></div>
      <div className="contact-content">
        <div className="contact-header" >
          <h1>Get in Touch</h1>
          <p>We'd love to hear from you! Reach out for inquiries or collaborations.</p>
        </div>
      </div>

      <h1 className='text-center mt-3 text-white'>Contact us</h1>
     
      <div className="contact-container bg-danger">

        <div className="contact-wrapper">


          <div className="contact-info">

            <div className="info-card">
              <h2>Contact Information</h2> <hr />
              <ul >
                <li><MdEmail size="2vh" style={{ color: "red" }} /> Email : enny@gmail.com</li> <br />
                <li> <FaPhoneFlip size="2vh" style={{ color: "red" }} /> Number : 08102656596</li> <br />
                <li> <FaLocationDot size="2vh" style={{ color: "red" }} /> Address : no 4 lola fadeyibi street.lagos</li>
              </ul> <br />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad velit sint ullam laboriosam, at reprehenderit minima rem aliquid in rerum dolore, odit ducimus enim quaerat? Iusto a inventore maiores repudiandae?</p>
            </div>

          </div>


          <form onSubmit={handleSubmit} className="contact-form text-white">

            <div className="form-group">

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your Name"
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Email Address"
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Subject"
              />
            </div>

            <div className="form-group">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                required
                placeholder="Your Message"
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>


        </div>

      </div>

      {/* <MapComponent/> */}
    </div>
  );
};

export default ContactUs;