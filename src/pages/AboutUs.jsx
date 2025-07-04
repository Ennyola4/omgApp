import { useEffect } from 'react';
import '../css/aboutus.css';
import aos from 'aos';
import 'aos/dist/aos.css';
import { 
  FaChessQueen, 
  FaLightbulb, 
  FaUsers,
  FaGlobeAmericas,
  FaAward,
  FaChartLine,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaQuoteLeft
} from "react-icons/fa";
import imageThree from '../images/imageThree.jpg';
import imageTwenty from '../images/imageTwenty.jpg';
import imageSeven from '../images/imageSeven.jpg';
import imageTen from '../images/imageTen.jpg';

const AboutUs = () => {
  useEffect(() => {
    aos.init({
      duration: 800,
      once: true
    });
  }, []);

  const teamMembers = [
    {
      id: 1,
      name: "Aare Dele Momodu",
      role: "Chief Editor",
      bio: "15+ years shaping journalistic excellence with a focus on investigative reporting.",
      image: imageThree,
      social: {
        twitter: "#",
        linkedin: "#",
        instagram: "#"
      }
    },
    {
      id: 2,
      name: "Temitope Ogunleye",
      role: "Production Manager",
      bio: "Transforming stories into visual experiences that captivate global audiences.",
      image: imageTwenty,
      social: {
        twitter: "#",
        linkedin: "#",
        instagram: "#"
      }
    },
    
    {
      id: 3,
      name: "Aisha Johnson",
      role: "Senior Correspondent",
      bio: "Award-winning journalist specializing in social justice and human rights.",
      image: imageSeven,
      social: {
        twitter: "#",
        linkedin: "#",
        instagram: "#"
      }
    },
    {
      id: 4,
      name: "Marcus Wright",
      role: "Digital Strategist",
      bio: "Pioneering new media formats to engage tomorrow's audiences.",
      image: imageTen,
      social: {
        twitter: "#",
        linkedin: "#",
        instagram: "#"
      }
    },
      {
      id: 2,
      name: "Temitope Ogunleye",
      role: "Production Manager",
      bio: "Transforming stories into visual experiences that captivate global audiences.",
      image: imageTwenty,
      social: {
        twitter: "#",
        linkedin: "#",
        instagram: "#"
      }
    },
  ];

  return (
    <div className="neo-about-container">
      {/* Geometric Hero */}
      <section className="neo-hero">
        <div className="neo-hero-content" data-aos="fade-up">
          <h1>Redefining <span className="highlights">Media</span> for the Digital Age</h1>
          <div className="neo-hero-stats">
            <div className="stat-pill" data-aos="fade-up" data-aos-delay="200">
              <FaGlobeAmericas className="stat-icon" />
              <span>Global Reach</span>
            </div>
            <div className="stat-pill" data-aos="fade-up" data-aos-delay="300">
              <FaAward className="stat-icon" />
              <span>Award-Winning</span>
            </div>
            <div className="stat-pill" data-aos="fade-up" data-aos-delay="400">
              <FaChartLine className="stat-icon" />
              <span>Innovative</span>
            </div>
          </div>
        </div>
        <div className="neo-hero-shapes">
          <div className="shape-triangle" data-aos="fade-right"></div>
          <div className="shape-circle" data-aos="fade-left"></div>
        </div>
      </section>

      {/* Diagonal Divider */}
      <div className="neo-divider"></div>

      {/* Core Values - Circular Layout */}
      <section className="neo-values">
        <h2 className="neo-section-title" data-aos="fade-up">Our <span className="highlights">Core</span> Principles</h2>
        <div className="neo-values-circle">
          <div className="value-center" data-aos="zoom-in">
            <FaQuoteLeft className="quote-icon" />
            <p>Truth Above All</p>
          </div>
          <div className="value-orb" data-aos="fade-up" data-aos-delay="100" style={{ top: '20%', left: '10%' }}>
            <FaChessQueen className="value-icon" />
            <h3>Integrity</h3>
            <p>Unshakable ethical foundation</p>
          </div>
          <div className="value-orb" data-aos="fade-up" data-aos-delay="200" style={{ top: '10%', right: '20%' }}>
            <FaLightbulb className="value-icon" />
            <h3>Innovation</h3>
            <p>Pushing boundaries daily</p>
          </div>
          <div className="value-orb" data-aos="fade-up" data-aos-delay="300" style={{ bottom: '15%', left: '15%' }}>
            <FaUsers className="value-icon" />
            <h3>Community</h3>
            <p>Journalism that serves</p>
          </div>
          <div className="value-orb" data-aos="fade-up" data-aos-delay="400" style={{ bottom: '20%', right: '10%' }}>
            <FaGlobeAmericas className="value-icon" />
            <h3>Impact</h3>
            <p>Stories that change lives</p>
          </div>
        </div>
        
      </section>

      {/* Timeline Story */}
      <section className="neo-timeline">
        <h2 className="neo-section-title" data-aos="fade-up">Our <span className="highlights">Evolution</span></h2>
        <div className="timeline-container">
          <div className="timeline-line"></div>
          <div className="timeline-item" data-aos="fade-right">
            <div className="timeline-date">2010</div>
            <div className="timeline-content">
              <h3>Humble Beginnings</h3>
              <p>Founded as a small digital news collective with just 3 journalists working from a shared apartment.</p>
            </div>
          </div>
          <div className="timeline-item" data-aos="fade-left">
            <div className="timeline-date">2014</div>
            <div className="timeline-content">
              <h3>First Major Investigation</h3>
              <p>Our exposé on urban development policies went viral and led to city council reforms.</p>
            </div>
          </div>
          <div className="timeline-item" data-aos="fade-right">
            <div className="timeline-date">2018</div>
            <div className="timeline-content">
              <h3>International Expansion</h3>
              <p>Opened our first overseas bureau and won our first journalism award.</p>
            </div>
          </div>
          <div className="timeline-item" data-aos="fade-left">
            <div className="timeline-date">Present</div>
            <div className="timeline-content">
              <h3>Global Media Force</h3>
              <p>Now reaching millions monthly with teams in 5 countries and 50+ journalists.</p>
            </div>
          </div>

        
        </div>
      </section>

      {/* Hexagonal Team Grid */}
      <section className="neo-team">
        <h2 className="neo-section-title" data-aos="fade-up">Meet The <span className="highlights">Visionaries</span></h2>
        <div className="neo-team-grid">
          {teamMembers.map((member, index) => (
            <div 
              className={`team-hexagon hex-${index + 1}`} 
              key={member.id}
              data-aos="zoom-in"
              data-aos-delay={(index + 1) * 100}
            >
              <div className="hexagon-content">
                <img src={member.image} alt={member.name} />
                <div className="hexagon-overlay">
                  <h3>{member.name}</h3>
                  <p className="role">{member.role}</p>
                  <div className="social-links">
                    <a href={member.social.twitter}><FaTwitter /></a>
                    <a href={member.social.linkedin}><FaLinkedin /></a>
                    <a href={member.social.instagram}><FaInstagram /></a>
                  </div>
                </div>
              </div>

              
            </div>

            
          ))}
          <div className="team-hexagon hex-center" data-aos="zoom-in">
            <div className="hexagon-content">
              <div className="center-content">
                <h3>Join Our Team</h3>
                <p>We're always looking for passionate storytellers</p>
                <button className="neo-button">Careers</button>
              </div>
            </div>
          </div>

          
        </div>
      </section>

      {/* Testimonial Parallax */}
      <section className="neo-testimonial" data-aos="fade-up">
        <div className="testimonial-content">
          <FaQuoteLeft className="testimonial-quote" />
          <blockquote>
            "This organization represents the gold standard of digital journalism - fearless in pursuit of truth while innovating constantly to engage modern audiences."
          </blockquote>
          <cite>- Media Review International</cite>
        </div>
      </section>

      {/* Interactive CTA */}
      <section className="neo-cta">
        <div className="cta-containers" data-aos="fade-up">
          <h2>Ready to Experience <span className="highlights">Better</span> Journalism?</h2>
          <div className="cta-buttonss">
            <button className="neo-button secondary">Subscribe Now</button>
            <button className="neo-button secondary">Contact Us</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;