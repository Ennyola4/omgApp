import React from 'react'
import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth'
import { app } from '../firebase'
import { useNavigate } from 'react-router-dom'
import {  FaGoogle} from 'react-icons/fa';



const OAuth = () => {
  const navigate = useNavigate()
  const auth = getAuth(app)
  const handleGoogleClick = async () => {
    const provider = new GoogleAuthProvider()
    provider.setCustomParameters({ prompt: 'select_account' })
    try {
      const resultsFromGoogle = await signInWithPopup(auth, provider)
      const res = await fetch('http://localhost:3500/api/auth/google', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: resultsFromGoogle.user.displayName,
          email: resultsFromGoogle.user.email,
          googlePhotoUrl: resultsFromGoogle.user.photoURL,
        }),
      })
      const data = await res.json()
      if (data.success === false) {
        console.log('error saving user data')
      }
      if (res.ok) {
        navigate('/SignInPage')
      }

    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
      <div className="social-login">
        <button type="button" onClick={handleGoogleClick}
          className="google-btn">
          <FaGoogle /> Google
        </button>

      </div>
    </div>
  )
}

export default OAuth
