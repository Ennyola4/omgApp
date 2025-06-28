import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaEnvelope, FaLock, FaSpinner,  } from 'react-icons/fa';
import '../css/signuppage.css'
import OAuth from '../components/Oauth';


const SignUpPage = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        // confirmPassword: ''
    });
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const validate = () => {
        const newErrors = {};
        if (!formData.username.trim()) newErrors.username = 'Username is required';
        if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'Email is invalid';
        if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters';
        // if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Clear previous errors
        setErrors("");
        
        // Frontend validation
        if (!formData.username || !formData.email || !formData.password) {
          return setErrors("Please fill out all fields!");
        }
      
        // Email format validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
          return setErrors("Please enter a valid email address");
        }
      
        // Password length validation
        if (formData.password.length < 8) {
          return setErrors("Password must be at least 8 characters long");
        }
      
        setIsLoading(true);
      
        try {
          const res = await fetch("http://localhost:4050/api/auth/signup", {
            method: "POST",
            headers: { 
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              username: formData.username.trim(),
              email: formData.email.trim().toLowerCase(),
              password: formData.password
            })
          });
      
          const data = await res.json();
      
          if (!res.ok) {
            // Handle backend validation errors
            throw new Error(data.message || "Signup failed");
          }
      
          // Success case
          setSuccess(true);
          setTimeout(() => navigate('/SignInPage'), 2000);
          
        } catch (error) {
          setErrors(error.message || "Error during signup");
          console.error("Signup error:", error);
        } finally {
          setIsLoading(false);
        }
      };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <div className="signup-container">
            <div className={`signup-card ${success ? 'success-animation' : ''}`}>
                {success ? (
                    <div className="success-message">
                        <h2>🎉 Welcome aboard!</h2>
                        <p>Your account has been created successfully</p>
                        <div className="loading-bar"></div>
                    </div>
                ) : (
                    <>
                        <h2 className='text-white'>Create Your Account</h2>
                        <p className="subtext">Join our community today</p>

                        <form onSubmit={handleSubmit}>
                            <div className={`input-group ${errors.username ? 'error' : ''}`}>
                                <FaUser className="input-icon" />
                                <input
                                    type="text"
                                    name="username"
                                    placeholder="Username"
                                    value={formData.username}
                                    onChange={handleChange}
                                />
                                {errors.username && <span className="error-message">{errors.username}</span>}
                            </div>

                            <div className={`input-group ${errors.email ? 'error' : ''}`}>
                                <FaEnvelope className="input-icon" />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                                {errors.email && <span className="error-message">{errors.email}</span>}
                            </div>

                            <div className={`input-group ${errors.password ? 'error' : ''}`}>
                                <FaLock className="input-icon" />
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    value={formData.password}
                                    onChange={handleChange}
                                />
                                {errors.password && <span className="error-message">{errors.password}</span>}
                            </div>

                            {/* <div className={`input-group ${errors.confirmPassword ? 'error' : ''}`}>
                                <FaLock className="input-icon" />
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    placeholder="Confirm Password"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                />
                                {errors.confirmPassword && (
                                    <span className="error-message">{errors.confirmPassword}</span>
                                )}
                            </div> */}

                            <button className='isbtn' type="submit" disabled={isLoading}>
                                {isLoading ? (
                                    <>
                                        <FaSpinner className="spinner" />
                                        Creating Account...
                                    </>
                                ) : (
                                    'Sign Up'
                                )}
                            </button>
                            <div className="divider">
                                <span>or signup with</span>
                            </div>


                           <OAuth/>
                        </form>

                        <p className="login-link">
                            Already have an account? <a href="/signinpage">Log in</a>
                        </p>
                    </>
                )}
            </div>
        </div>
    );
};

export default SignUpPage;