import React, { useEffect, useState } from 'react';
import '../css/audiostorytelling.css';
import { FaMicrophone, FaHeadphones, FaPodcast, FaPlay, FaPause } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import imageTwelve from "../images/imageTwelve.jpg";
import imageTwo from "../images/imageTwo.jpg";
import imageSix from "../images/imageSix.jpg";
import imageEight from "../images/imageEight.jpg";
import imageThree from "../images/imageThree.jpg";
import imageFour from "../images/imageFour.jpg";
import imageTen from "../images/imageTen.jpg";
import imageTwentyThree from "../images/imageTwentyThree.jpg";
import imageTwentyFour from "../images/imageTwentyFour.jpg";







const AudioStorytelling = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false
    });
  }, []);

  const featuredPodcasts = [
    {
      title: "The Human Experience",
      duration: "45:00",
      category: "Documentary",
      image: imageTen
    },
    {
      title: "Tech Horizons",
      duration: "30:00",
      category: "Technology",
      image: imageTwentyThree
    },
    {
      title: "Nature's Whispers",
      duration: "35:00",
      category: "Nature",
      image: imageTwentyFour
    }
  ];

  return (
    <div className="as-container">
      {/* Animated Wave Hero Section */}
      <section className="as-hero">
        <div className="as-wave">
          <img className='as-wave-img' src={imageFour} alt="" />
        </div>
          <div className="as-wave">
          <img className='as-wave-img' src={imageEight} alt="" />
        </div>
          <div className="as-wave">
          <img className='as-wave-img' src={imageThree} alt="" />
        </div>
        <div className="as-wave">
          <img className='as-wave-img' src={imageTwo} alt="" />
        </div>
        <div className="as-wave">
          <img className='as-wave-img' src={imageSix} alt="" />
        </div>
        <div className="as-hero-content" data-aos="zoom-in">
          <h1>Audio Storytelling</h1>
          <p>Where Stories Come Alive Through Sound</p>
        </div>
      </section>

      {/* Sound Wave Visualizer Section */}
      <section className="as-visualizer">
        <div className="as-bars">
          {[...Array(50)].map((_, index) => (
            <div key={index} className="as-bar"></div>
          ))}
        </div>
      </section>

      {/* Services Grid */}
      <section className="as-services">
        <h2 data-aos="fade-up">Our Audio <span>Services</span></h2>
        <div className="as-services-grid">
          <div className="as-service-card" data-aos="flip-left">
            <FaMicrophone className="as-icon" />
            <h3>Podcast Production</h3>
            <p>Professional recording and editing for compelling podcasts</p>
          </div>
          <div className="as-service-card" data-aos="flip-up">
            <FaHeadphones className="as-icon" />
            <h3>Audio Documentaries</h3>
            <p>Immersive storytelling through sound and narrative</p>
          </div>
           <div className="as-service-card" data-aos="flip-up">
            <FaHeadphones className="as-icon" />
            <h3>Audio Documentaries</h3>
            <p>Immersive storytelling through sound and narrative</p>
          </div>
           <div className="as-service-card" data-aos="flip-up">
            <FaHeadphones className="as-icon" />
            <h3>Audio Documentaries</h3>
            <p>Immersive storytelling through sound and narrative</p>
          </div>
           <div className="as-service-card" data-aos="flip-up">
            <FaHeadphones className="as-icon" />
            <h3>Audio Documentaries</h3>
            <p>Immersive storytelling through sound and narrative</p>
          </div>
          <div className="as-service-card" data-aos="flip-right">
            <FaPodcast className="as-icon" />
            <h3>Sound Design</h3>
            <p>Creative audio elements that enhance your story</p>
          </div>
        </div>
      </section>

      {/* Featured Podcasts */}
      <section className="as-featured">
        <div className="as-featured-header" data-aos="fade-up">
          <h2 data-aos="fade-up">Featured <span> Productions</span></h2>
        </div>
        <div className="as-podcast-grid">
          {featuredPodcasts.map((podcast, index) => (
            <div 
              className="as-podcast-card" 
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="as-podcast-image">
                <img src={podcast.image} alt={podcast.title} />
                {/* <button 
                  className="as-play-button"
                  onClick={() => setIsPlaying(!isPlaying)}
                >
                  {isPlaying ? <FaPause /> : <FaPlay />}
                </button> */}
              </div>
              <div className="as-podcast-info">
                <h3>{podcast.title}</h3>
                <p>{podcast.category}</p>
                <span>{podcast.duration}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Audio Player */}
      <section className="as-player">
        <div className="as-player-content" data-aos="fade-up">
          <h2>Try Our Audio Experience</h2>
          <div className="as-player-demo">
            <div className="as-player-controls">
              <button className="as-control-btn">
                <FaPlay />
              </button>
              <div className="as-progress-bar">
                <div className="as-progress"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AudioStorytelling;