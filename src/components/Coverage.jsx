import React from 'react'
import imageSeven from '../images/imageSeven.jpg'
import imageSix from '../images/imageSix.jpg'
import imageSixteen from '../images/imageSixteen.jpg'
import imageEleven from '../images/imageEleven.jpg'
import imageFour from '../images/imageFour.jpg'



import '../css/coverage.css'



const Coverage = () => {
  return (
    <div className='overall-coverage'>
        <h1 className='text-center m-2 p-2'>Our Coverage</h1>
      <div >

            <div className='coverage-two'>
       
        <div data-aos="fade-up" data-aos-duration="2000" >
            
          <img src={imageFour} className='coverage-image-two' alt="" /> 
          <h5 >Chief Dele 60th birthday</h5>
          <p >Getting educated and taking a few basic steps may keep you from becoming a victim of crime and fraud.</p>
        </div>

        <div data-aos="fade-up" data-aos-duration="2000">
          <img src={imageSix} className='coverage-image-two'  alt="" /> 
          <h5 >First bank opening</h5>
          <p >Getting educated and taking a few basic steps may keep you from becoming a victim of crime and fraud.</p>
        </div>
        </div>
        <div className='coverage'>
        <div data-aos="fade-up" data-aos-duration="1000">
          <img src={imageSeven} className='coverage-image' alt="" /> 
          <h5 >Outreach</h5>
          <p  >The Community Relations Unit at FBI Headquarters and FBI community outreach specialists in field offices across the country create and strengthen relationships </p>
        </div>

        <div  data-aos="fade-up" data-aos-duration="1000">
          <img src={imageSixteen} className='coverage-image'alt="" /> 
          <h5 >Outreach</h5>
          <p >The Community Relations Unit at FBI Headquarters and FBI community outreach specialists in field offices across the country create and strengthen relationships.</p>
        </div>

        <div  data-aos="fade-up" data-aos-duration="1000">
          <img src={imageEleven} className='coverage-image'  alt="" /> 
          <h5 >Outreach</h5>
          <p >The Community Relations Unit at FBI Headquarters and FBI community outreach specialists in field offices across the country create and strengthen relationships.</p>
        </div>
        </div>
      

    

      <div className='coverage-two'>
       
        <div data-aos="fade-up" data-aos-duration="2000" >
            
          <img src={imageEleven} className='coverage-image-two' alt="" /> 
          <h5 >Outreach</h5>
          <p >Getting educated and taking a few basic steps may keep you from becoming a victim of crime and fraud.</p>
        </div>

        <div data-aos="fade-up" data-aos-duration="2000">
          <img src={imageSix} className='coverage-image-two'  alt="" /> 
          <h5 >Outreach</h5>
          <p >Getting educated and taking a few basic steps may keep you from becoming a victim of crime and fraud.</p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Coverage
