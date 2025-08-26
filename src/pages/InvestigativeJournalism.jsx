import React, { useEffect } from 'react';
import '../css/investigativejournalism.css';
import { useLocation } from "react-router-dom";

import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaSearch, FaShieldAlt, FaNewspaper, FaAward } from 'react-icons/fa';
import imageTwelve from "../images/imageTwelve.jpg";
import imageTwo from "../images/imageTwo.jpg";
import imageSix from "../images/imageSix.jpg";

const InvestigativeJournalism = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  const investigations = [
    {
      title: "Corporate Corruption Exposed",
      date: "2025",
      impact: "Led to major policy reforms",
      image: imageTwelve,
    },
    {
      title: "Environmental Crisis Investigation",
      date: "2024",
      impact: "Resulted in $10M cleanup initiative",
      image: imageTwo,
    },
    {
      title: "Public Health Coverage",
      date: "2024",
      impact: "Changed healthcare protocols",
      image: imageSix,
    }
  ];

  return (
    <div className="ij-container">
      {/* Hero Section */}
      <section className="ij-hero">
        <div className="ij-hero-content" data-aos="fade-up">
          <h1>Investigative Journalism</h1>
          <p className="ij-hero-text">Uncovering Truth. Pursuing Justice. Making Impact.</p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="ij-mission">
        <div className="ij-grid">
          <div className="ij-mission-card" data-aos="fade-right">
            <FaSearch className="ij-icon" />
            <h3>Deep Research</h3>
            <p>Thorough investigation of complex issues affecting society</p>
          </div>
          <div className="ij-mission-card" data-aos="fade-up">
            <FaShieldAlt className="ij-icon" />
            <h3>Ethical Reporting</h3>
            <p>Committed to accuracy, fairness, and transparency</p>
          </div>
          <div className="ij-mission-card" data-aos="fade-left">
            <FaNewspaper className="ij-icon" />
            <h3>Impactful Stories</h3>
            <p>Creating meaningful change through journalism</p>
          </div>
        </div>
      </section>

      {/* Featured Investigations */}
      <section className="ij-featured">
        <h2 data-aos="fade-up">Featured Investigations</h2>
        <div className="ij-cases">
          {investigations.map((case_, index) => (
            <div
              className="ij-case-card"
              key={index}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            >
              <div className="ij-case-image">
                <img src={case_.image} alt={case_.title} />
              </div>
              <div className="ij-case-content">
                <h3>{case_.title}</h3>
                <p className="ij-case-date">{case_.date}</p>
                <p className="ij-case-impact">{case_.impact}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Awards Section */}
      <section className="ij-awards">
        <div className="ij-awards-content" data-aos="fade-up">
          <FaAward className="ij-award-icon" />
          <h2>Award-Winning Journalism</h2>
          <div className="ij-awards-grid">
            <div className="ij-award">
              <h4>Pulitzer Prize</h4>
              <p>2024 Finalist</p>
            </div>
            <div className="ij-award">
              <h4>IRE Award</h4>
              <p>2023 Winner</p>
            </div>
            <div className="ij-award">
              <h4>Global Investigation</h4>
              <p>2025 Recognition</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="ij-cta">
        <div className="ij-cta-content" data-aos="fade-up">
          <h2>Have a Story Tip?</h2>
          <p>We protect our sources and investigate stories that matter.</p>
          <button className="ij-cta-button">Submit a Tip</button>
        </div>
      </section>
    </div>
  );
};

export default InvestigativeJournalism;