import React from 'react'
import HomePagePics from '../components/HomePagePics'
import Card from '../components/Card'
import About from '../components/About'
import Contact from '../components/Contact'

import Coverage from '../components/Coverage'

const Home = () => {
  return (
    <div >
      
      <HomePagePics/>
      <Coverage/>
      <About/>
      <Contact/>
     
    </div>
  )
}

export default Home
