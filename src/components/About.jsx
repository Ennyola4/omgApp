import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../css/about.css';
import imageFourteen from '../images/imageFourteen.jpg';
import imageTwentyOne from '../images/imageTwentyOne.jpg';
import imageTwenty from '../images/imageTwenty.jpg';
import imageTwelve from '../images/imageTwelve.jpg';







const About = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSignUpPageClick = () => {
    setIsLoading(true);
    setTimeout(() => navigate('/AboutUs'), 1000);
  };

  // Images for carousel
  const carouselImages = [
    "https://pbs.twimg.com/ext_tw_video_thumb/1788627036589768704/pu/img/7vx4qns6K_OlDvs5.jpg",
    "https://i.ytimg.com/vi/EWVZ5WeNuqQ/sddefault.jpg?v=63c8229e",
    "https://www.ivory-ng.com/wp-content/uploads/2018/07/IMG_1581_1600x1067-1170x780.jpg",
    "https://theeagleonline.com.ng/wp-content/uploads/2017/09/PIX-4743-640x313.jpg"
  ];

  // Team members data
  const teamMembers = [
    {
      id: 1,
      name: "Temitope Ogunleye",
      role: "Production Manager",
      image: imageTwenty,
      bio: "Visionary leader with 15+ years in media innovation."
    },
    {
      id: 2,
      name: "Benjamin Jr",
      role: "DOP",
      image: imageTwentyOne,
      bio: "Expert in bringing creative concepts to life."
    },
    {
      id: 3,
      name: "Erik David",
      role: "Tech Lead",
      image: imageTwelve,
      bio: "Pioneering new technologies in media production."
    },
    {
      id: 4,
      name: "Abel Bamidele",
      role: "Content Strategist",
      image: imageFourteen ,
      bio: "Crafting compelling narratives that resonate."
    }
  ];

  // Stats data
  const stats = [
    { value: "200+", label: "Projects Completed" },
    { value: "15", label: "Industry Awards" },
    { value: "50+", label: "Team Members" },
    { value: "10M+", label: "Global Audience" }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-gradient"></div>
        <div className="container">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h4 
              className="subtitle"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Innovating media to standard
            </motion.h4>
            
            <motion.h1 
              className="title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              About <span>Us</span>
            </motion.h1>
            
            <motion.p 
              className="description"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
            >
              We are a passionate team dedicated to revolutionizing media production. With cutting-edge technology and creative vision, we deliver exceptional content that captivates audiences worldwide.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Media Showcase */}
      <section className="media-showcase">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={!isMobile}
          modules={[Autoplay, Pagination, Navigation]}
          className="media-swiper"
        >
          {carouselImages.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="swiper-slide-content">
                <img 
                  src={img} 
                  alt={`Showcase ${index}`} 
                  loading="lazy"
                />
                <div className="slide-overlay"></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Our Story Section */}
      <section className="story-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Story</h2>
            {/* <div className="divider"></div> */}
          </div>
          
          <div className="story-content">
            <div className="story-text">
              <p>
                Founded in 2010, we began as a small creative studio with big dreams. Over the years, we've grown into a full-service media production company recognized for our innovative approach and commitment to quality.
              </p>
              <p>
                Our journey has been marked by collaborations with global brands, independent artists, and everything in between. Each project has shaped our philosophy: to create media that not only entertains but inspires.
              </p>
              <motion.button
                className="cta-buttonOne"
                onClick={handleSignUpPageClick}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                {isLoading ? (
                  <span className="button-loader"></span>
                ) : (
                  <>
                    LEARN MORE
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </>
                )}
              </motion.button>
            </div>
            <div className="story-image">
              <img 
                src="https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80" 
                alt="Our team working" 
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <motion.div 
                className="stat-card"
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <h3>{stat.value}</h3>
                <p>{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <div className="section-header">
            <h2>Meet The Team</h2>
          </div>
          
          <div className="team-grid">
            {teamMembers.map((member) => (
              <motion.div 
                className="team-card"
                key={member.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                whileHover={{ y: -10 }}
              >
                <div className="team-image">
                  <img src={member.image} alt={member.name} loading="lazy" />
                </div>
                <div className="team-info">
                  <h4>{member.name}</h4>
                  <p className="role">{member.role}</p>
                  <p className="bio">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Values</h2>
          </div>
          
          <div className="values-grid">
            <motion.div 
              className="value-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              <div className="value-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 14C8 14 9.5 16 12 16C14.5 16 16 14 16 14M9 9H9.01M15 9H15.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Creativity</h3>
              <p>We push boundaries and challenge conventions to deliver fresh perspectives.</p>
            </motion.div>
            
            <motion.div 
              className="value-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="value-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 12H4M4 12L10 6M4 12L10 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Innovation</h3>
              <p>We embrace new technologies and methodologies to stay ahead.</p>
            </motion.div>

            

            
            
            <motion.div 
              className="value-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <div className="value-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 8V12L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Excellence</h3>
              <p>We commit to the highest standards in every project we undertake.</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;