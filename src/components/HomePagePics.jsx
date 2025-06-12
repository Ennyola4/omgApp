import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/home.css'
import aos from 'aos'
import 'aos/dist/aos.css'
import 'aos/dist/aos.js'
import { FaMicrophone } from "react-icons/fa6";
import { ImFacebook2 } from "react-icons/im";
import { TfiYoutube } from "react-icons/tfi";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import Navbar from './Navbar';
import imageSeventeen from '../images/imageSeventeen.jpg'


const HomePagePics = () => {

  const navigate = useNavigate();

  const handleSignUpPageClick = () => {
    setIsLoading(true); // Show loader

    setTimeout(() => {
      navigate('/SignUpPage'); // Navigate after 3 seconds
    }, 3000);
  };

  const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {

    aos.init({
      duration: 1000
    })
  }, [])

  const [time, setTime] = useState(new Date().toLocaleTimeString());
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  const currentDate = new Date();
  const day = currentDate.toLocaleString('default', { weekday: 'short' });
  const date = currentDate.getDate();
  const month = currentDate.toLocaleString('default', { month: 'short' });
  const year = currentDate.getFullYear();


  return (
    <div>
      <div className="home-container">
        {/* <Navbar/> */}
      <div className="hero-content"  data-aos="fade-right" data-aos-duration="3000">
        <h1 data-aos="fade-right" data-aos-duration="3000">Your lens to the media world 
        </h1>
        <p data-aos="fade-right" data-aos-duration="1000">Unfiltered, Unmatched, Unstoppable</p>
        
      
        <div className="date-display">
          {`${day}, ${month} ${date}, ${year}`}
        </div>

        <div className="time-section">
          {time}
          
          <button
            className="login-btn"
            onClick={handleSignUpPageClick}
            disabled={isLoading}
          >
            {isLoading ? (
              <span className="loader"></span>
            ) : (
              'LOG IN TO BLOG'
            )}
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default HomePagePics;