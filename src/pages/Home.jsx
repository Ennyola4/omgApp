import React from 'react'
import HomePagePics from '../components/HomePagePics'
import About from '../components/About'
import Contact from '../components/Contact'
import Coverage from '../components/Coverage'
import MediaHomepage from '../components/MediaHomepage'

const Home = () => {
  return (
    <div >
      
      {/* <HomePagePics/> */}
      <MediaHomepage/>
      <Coverage/>
      <About/>
      <Contact/>
     
    </div>
  )
}

export default Home
