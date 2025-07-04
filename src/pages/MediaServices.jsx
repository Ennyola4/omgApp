import { useEffect } from 'react';
import '../css/media-services.css';
import aos from 'aos';
import 'aos/dist/aos.css';
import { 
  FaNewspaper,
  FaPodcast,
  FaVideo,
  FaPhotoVideo,
  FaChartLine,
  FaGlobe,
  FaQuoteLeft
} from "react-icons/fa";
import imageThree from '../images/imageThree.jpg';
import imageSixteen from '../images/imageSixteen.jpg';
import service3 from '../images/imageSeven.jpg';

const MediaServices = () => {
  useEffect(() => {
    aos.init({
      duration: 800,
      once: true
    });
  }, []);

  const mediaServices = [
    {
      icon: <FaNewspaper className="ms-icon" />,
      title: "Investigative Journalism",
      description: "In-depth reporting that uncovers truth and holds power accountable.",
      color: "#a60606"
    },
    {
      icon: <FaPodcast className="ms-icon" />,
      title: "Audio Storytelling",
      description: "Compelling podcasts and audio documentaries that engage audiences.",
      color: "#ee5050"
    },
    {
      icon: <FaVideo className="ms-icon" />,
      title: "Video Production",
      description: "High-quality video content for news, features, and documentaries.",
      color: "#4776E6"
    },
    {
      icon: <FaPhotoVideo className="ms-icon" />,
      title: "Photo Journalism",
      description: "Powerful visual storytelling that captures the essence of every story.",
      color: "#00c6ff"
    },
    {
      icon: <FaChartLine className="ms-icon" />,
      title: "Media Analytics",
      description: "Data-driven insights to optimize your content strategy.",
      color: "#f46b45"
    },
    {
      icon: <FaGlobe className="ms-icon" />,
      title: "Global Distribution",
      description: "Worldwide syndication to maximize your content's reach.",
      color: "#a8ff78"
    }
  ];

  const mediaFeatures = [
    {
      title: "Premium Content",
      description: "Exclusive stories and in-depth analysis you won't find elsewhere."
    },
    {
      title: "Multi-Platform",
      description: "Content optimized for print, digital, audio, and video formats."
    },
    {
      title: "Trusted Sources",
      description: "Rigorous fact-checking and ethical reporting standards."
    }
  ];

  return (
    <div className="ms-container">
      {/* Hero Section */}
      <section className="ms-hero">
        <div className="ms-hero-content" data-aos="fade-up">
          <h1 className="ms-hero-title">Premium <span className="ms-highlights">Media Services</span></h1>
          <p className="ms-subtitle">Cutting-edge journalism and content solutions for the digital age</p>
        </div>
        <div className="ms-hero-shapes">
          <div className="ms-shape-triangle" data-aos="fade-right"></div>
          <div className="ms-shape-circle" data-aos="fade-left"></div>
        </div>
      </section>

      {/* Diagonal Divider */}
      <div className="ms-divider"></div>

      {/* Services Grid */}
      <section className="ms-services-section">
        <div className="ms-container-inner">
          <h2 className="ms-section-title" data-aos="fade-up">Our <span className="ms-highlights">Services</span></h2>
          <p className="ms-section-desc">Comprehensive media solutions tailored to your needs</p>
          
          <div className="ms-grid">
            {mediaServices.map((service, index) => (
              <div 
                className="ms-card" 
                key={index}
                data-aos="fade-up"
                data-aos-delay={(index + 1) * 100}
              >
                <div className="ms-card-icon" style={{ color: service.color }}>
                  {service.icon}
                </div>
                <h3 className="ms-card-title">{service.title}</h3>
                <p className="ms-card-desc">{service.description}</p>
                <div className="ms-card-hover" style={{ backgroundColor: service.color }}>
                  <button className="ms-btn">Learn More</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Showcase */}
      <section className="ms-feature-section">
        <div className="ms-container-inner">
          <div className="ms-feature-content">
            <div className="ms-feature-text" data-aos="fade-right">
              <h2 className="ms-feature-title">Why Our <span className="ms-highlights">Media Services</span> Stand Out</h2>
              <div className="ms-feature-list">
                {mediaFeatures.map((feature, index) => (
                  <div className="ms-feature-item" key={index}>
                    <div className="ms-feature-bullet"></div>
                    <div>
                      <h3 className="ms-feature-item-title">{feature.title}</h3>
                      <p className="ms-feature-item-desc">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="ms-feature-visual" data-aos="fade-left">
              <img src={imageThree} alt="Media team working" className="ms-visual-main" />
              <img src={imageSixteen} alt="Media production" className="ms-visual-overlay" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="ms-testimonial" data-aos="fade-up">
        <div className="ms-testimonial-content">
          <FaQuoteLeft className="ms-quote-icon" />
          <blockquote className="ms-quote-text">
            "Their media services combine journalistic integrity with innovative storytelling techniques that consistently deliver impact."
          </blockquote>
          <cite className="ms-quote-cite">- International Media Review</cite>
        </div>
      </section>

      {/* CTA Section */}
      <section className="ms-cta">
        <div className="ms-cta-container" data-aos="fade-up">
          <h2 className="ms-cta-title">Ready to Elevate Your <span className="ms-highlights">Media Presence</span>?</h2>
          <p className="ms-cta-desc">Partner with us for premium content solutions</p>
          <div className="ms-cta-buttons">
            <button className="ms-cta-btn ms-cta-primary">Get Started</button>
            <button className="ms-cta-btn ms-cta-secondary">Contact Our Team</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MediaServices;