import { useEffect } from 'react';
import '../css/aboutus.css'
import aos from 'aos'
import 'aos/dist/aos.css'
import 'aos/dist/aos.js'
import { FaHandshakeSimple } from "react-icons/fa6";
import { HiOutlineLightBulb } from "react-icons/hi";
import { MdGroups } from "react-icons/md";
import imageThree from '../images/imageThree.jpg'
import imageThirteen from '../images/imageThirteen.jpg'
import imageSeven from '../images/imageSeven.jpg'
import imageTen from '../images/imageTen.jpg'
import Card from '../components/Card';





const AboutUs = () => {




  useEffect(() => {

    aos.init({
      duration: 1000
    })
  }, [])
  return (
    <div  style={{ backgroundColor: 'rgb(225, 225, 225)' }}>
      <div className="about-us">
        <header className="about-header" >
          <h1 style={{ color: "white" }}>About Our Media Organization</h1>
          <p className="tagline text-white">Truth. Impact. Community.</p>
        </header>



        <div className="about-section values">
          <h2 style={{ marginBottom: "50px", color: "white" }}>Our Values</h2>
          <div className="value-cards text-white">
            <div className="value-card " data-aos="fade-up" data-aos-duration="2000">
              <h3>Integrity</h3> <br />
              <FaHandshakeSimple size="60px" />
              <p>Uncompromising commitment to factual, ethical journalism.</p>
            </div>
            <div className="value-card" data-aos="fade-up" data-aos-duration="2000">
              <h3>Innovation</h3> <br />
              <HiOutlineLightBulb size="60px" />
              <p>Pioneering new ways to tell important stories.</p>
            </div>
            <div className="value-card" data-aos="fade-up" data-aos-duration="2000">
              <h3>Community</h3> <br />
              <MdGroups size="60px" />
              <p>Journalism that serves the public first.</p>
            </div>

            <div className="value-card" data-aos="fade-up" data-aos-duration="2000">
              <h3>Community</h3> <br />
              <MdGroups size="60px" />
              <p>Journalism that serves the public first.</p>
            </div>
          </div>
        </div>
       


      </div>

      <Card/>
      <div className="about-section cta"  data-aos="fade-up" data-aos-duration="1000">
        <h2>Join Our Mission</h2>
        <button className="cta-button">Subscribe to Our Newsletter</button>
      </div>

     
    </div>



  );
};

export default AboutUs;