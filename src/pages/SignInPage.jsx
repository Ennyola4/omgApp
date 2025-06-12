import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FaEnvelope, FaLock, FaSpinner, FaGoogle, FaGithub, FaCheck } from 'react-icons/fa';
import '../css/signinpage.css'


const SignInPage = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [shake, setShake] = useState(false);
    const [showWelcome, setShowWelcome] = useState(false);
    const [countdown, setCountdown] = useState(5);

    const validate = () => {
        const newErrors = {};
        if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'Please enter a valid email';
        if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validate()) {
            setShake(true);
            setTimeout(() => setShake(false), 500);
            return;
        }

        setIsLoading(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        // Show welcome message
        setShowWelcome(true);

        // Start countdown
        const timer = setInterval(() => {
            setCountdown(prev => {
                if (prev <= 1) {
                    clearInterval(timer);
                    navigate('/Blog');
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <div className="login-container">
            <div className={`login-card ${shake ? 'shake' : ''} ${showWelcome ? 'welcome-active' : ''}`}>
                {showWelcome ? (
                    <div className="welcome-message text-white">
                        <div className="welcome-icon">
                            <FaCheck />
                        </div>
                        <h2>Login Successfull</h2>
                        <p>You're being redirected to your dashboard</p>
                        <div className="countdown">
                            Redirecting in {countdown}...
                        </div>
                        <div className="progress-bar"></div>
                    </div>
                ) : (
                    <>
                        <div className="login-header">
                            <h2>Welcome Back!</h2>
                            <p className="subtext">Sign in to continue your journey</p>
                        </div>

                        <form onSubmit={handleSubmit}>
                            <div className={`input-group ${errors.email ? 'error' : ''}`}>
                                <FaEnvelope className="input-icon" />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email Address"
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

                            <div className="forgot-password">
                                <Link to="#">Forgot password?</Link>
                            </div>

                            <button type="submit" disabled={isLoading}>
                                {isLoading ? (
                                    <>
                                        <FaSpinner className="spinner" />
                                        Signing In...
                                    </>
                                ) : (
                                    'Sign In'
                                )}
                            </button>

                            <div className="divider">
                                <span>or continue with</span>
                            </div>

                            <div className="social-login">
                                <button type="button" className="google-btn">
                                    <FaGoogle /> Google
                                </button>

                            </div>
                        </form>

                        <div className="signup-link">
                            Don't have an account? <Link to="/SignUpPage">Sign up</Link>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default SignInPage;