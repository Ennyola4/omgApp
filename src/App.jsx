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
          <Route path='/contact' element={<Contact/>} />
          <Route path='/team' element={<Team />} />
          <Route path='/singlepostpage' element={<SinglePostPage />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/write' element={<Write />} />
          <Route path='/MediaServices' element={<MediaServices />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  )
}

export default App
