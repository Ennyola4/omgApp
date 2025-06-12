import { useEffect, useState } from 'react'
import '../css/contact.css'
import aos from 'aos'
import 'aos/dist/aos.css'
import 'aos/dist/aos.js'
import imageSeven from '../images/imageSeven.jpg'
import imageSeventeen from '../images/imageSeventeen.jpg'
import { MdEmail } from "react-icons/md";
import { FaPhoneFlip } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";







const Contact = () => {

  useEffect(() => {

    aos.init({
      duration: 1000
    })
  }, [])

  return (
    <div className='contact-overall-container' > 

    
            <img className='homeImg' src={imageSeventeen} alt="" />


      <div className='d-flex' style={{ marginLeft: "8vw" }} data-aos="fade-up" data-aos-duration="3000">
        <div style={{marginLeft : "4vw"}}>
          <h1 style={{ fontSize: "2.5vw", marginTop: "5vw",marginLeft : "1vw" }}>
            Contact info
          </h1> <hr />

          <ul >
            <li><MdEmail size= "1vw" style={{color :"red"}} /> Email : enny@gmail.com</li> <br />
            <li> <FaPhoneFlip size= "1vw" style={{color :"blue"}} /> Phone number : 08102656596</li> <br />
            <li> <FaLocationDot size= "1vw" style={{color :"yellow"}} /> Address : no 4 lola fadeyibi street.lagos</li> 
          </ul>
          <img src={imageSeven} alt="" className='contactImg'  data-aos="fade-right" data-aos-duration="3000" />
          <p>Lorem ipsum dolor sit amet consec decumque impedit !!</p>
        
        </div>

        <div className='contactImage'>
          <img src="https://stratus.campaign-image.com/images/1080337000001705004_zc_v1_1706125371935_istockphoto_1359876068_612x612.jpeg" alt="" />
          <a href="/ContactUs" className='btn btn-warning text-white' style={{marginLeft : "5em",marginTop: "25px", width : "24rem"}}>MORE</a>
        </div>

        {/* <div style={{ marginTop: "6vw",marginBottom : "8vw",marginRight : "2vw" }} >
          <div className="container " data-aos="fade-up" data-aos-duration="3000" style={{ marginLeft: "15vw" }}>
            <form className="form">
              <div className="input">
                <input required="" type="text" />
                <label htmlFor="name">Name</label>
              </div>

              <div className="input">
                <input required="" name="email" type="text" />
                <label htmlFor="email">E-mail</label>
              </div>

              <div className="input">
                <textarea required="" cols="30" rows="1" id="message"></textarea>
                <label htmlFor="message">Message</label>
              </div> <br /> 
              <button style={{marginLeft : "1vw"}}>MORE→</button>
            </form>
          </div>

        </div> */}
      </div>



    </div>










  )
}

export default Contact
