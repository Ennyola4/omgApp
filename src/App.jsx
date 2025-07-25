import React from 'react'
import Home from './pages/Home'
// import About from './pages/About'
import Blog from './pages/Blog'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Team from './pages/Team'
import Footer from './components/Footer'
import SignUpPage from './pages/SignUpPage'
import SignInPage from './pages/SignInPage'
import SinglePostPage from './pages/SinglePostPage'
import AboutUs from './pages/AboutUs'
import Write from './pages/Write'
import MediaServices from './pages/MediaServices'
import Contact from './components/Contact'
import InvestigativeJournalism from './pages/InvestigativeJournalism';
import AudioStorytelling from './pages/AudioStorytelling';
import VideoProduction from './pages/VideoProduction';
import PhotoJournalism from './pages/PhotoJournalism';
import MediaAnalytics from './pages/MediaAnalytics';
import GlobalDistribution from './pages/GlobalDistribution';


const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signuppage' element={<SignUpPage />} />
          <Route path='/signinpage' element={<SignInPage />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/team' element={<Team />} />
          <Route path='/singlepostpage' element={<SinglePostPage />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/write' element={<Write />} />
          <Route path='/MediaServices' element={<MediaServices />} />
          <Route path="/investigative-journalism" element={<InvestigativeJournalism />} />
           <Route path="/audio-storytelling" element={<AudioStorytelling />} />
          <Route path="/video-production" element={<VideoProduction />} />
          <Route path="/photo-journalism" element={<PhotoJournalism />} />
          <Route path="/media-analytics" element={<MediaAnalytics />} />
          <Route path="/global-distribution" element={<GlobalDistribution />} /> 
        </Routes>
        <Footer />
      </Router>

    </div>
  )
}

export default App
