import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaEnvelope, FaLock, FaSpinner } from 'react-icons/fa';
import '../css/signuppage.css';

const SignUpPage = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });
    const [error, setError] = useState(null);
    const [fieldErrors, setFieldErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const validateForm = () => {
        const errors = {};
        let isValid = true;

        if (!formData.username.trim()) {
            errors.username = 'Username is required';
            isValid = false;
        } else if (formData.username.length < 3) {
            errors.username = 'Username must be at least 3 characters';
            isValid = false;
        }

        if (!formData.email.trim()) {
            errors.email = 'Email is required';
            isValid = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            errors.email = 'Please enter a valid email';
            isValid = false;
        }

        if (!formData.password) {
            errors.password = 'Password is required';
            isValid = false;
        } else if (formData.password.length < 8) {
            errors.password = 'Password must be at least 8 characters';
            isValid = false;
        }

        setFieldErrors(errors);
        return isValid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        if (!validateForm()) return;

        setIsLoading(true);

        try {
            const res = await fetch("http://localhost:5008/api/auth/register", {
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
                throw new Error(data.message || "Registration failed. Please try again.");
            }

            setSuccess(true);
            setTimeout(() => navigate('/SignInPage'), 3000);
            
        } catch (err) {
            setError(err.message || "An unexpected error occurred");
            console.error("Signup error:", err);
        } finally {
            setIsLoading(false);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        
        // Clear field-specific error when user types
        if (fieldErrors[name]) {
            setFieldErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    return (
        <div className="signup-container">
            <div className={`signup-card ${success ? 'success-animation' : ''}`}>
                {success ? (
                    <div className="success-message">
                        <h2>🎉 Welcome aboard!</h2>
                        <p>Your account has been created successfully</p>
                        <p>Redirecting to login...</p>
                        <div className="loading-bar"></div>
                    </div>
                ) : (
                    <>
                        <h2>Create Your Account</h2>
                        <p className="subtext">Join our community today</p>

                        {error && (
                            <div className="global-error">
                                {error}
                            </div>
                        )}

                        <form onSubmit={handleSubmit} noValidate>
                            <div className={`input-group ${fieldErrors.username ? 'error' : ''}`}>
                                <FaUser className="input-icon" />
                                <input
                                    type="text"
                                    name="username"
                                    placeholder="Username (min 3 characters)"
                                    value={formData.username}
                                    onChange={handleChange}
                                    required
                                />
                                {fieldErrors.username && (
                                    <span className="error-message">{fieldErrors.username}</span>
                                )}
                            </div>

                            <div className={`input-group ${fieldErrors.email ? 'error' : ''}`}>
                                <FaEnvelope className="input-icon" />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                                {fieldErrors.email && (
                                    <span className="error-message">{fieldErrors.email}</span>
                                )}
                            </div>

                            <div className={`input-group ${fieldErrors.password ? 'error' : ''}`}>
                                <FaLock className="input-icon" />
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Password (min 8 characters)"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                />
                                {fieldErrors.password && (
                                    <span className="error-message">{fieldErrors.password}</span>
                                )}
                            </div>

                            <button type="submit" disabled={isLoading} className="isbtn">
                                {isLoading ? (
                                    <>
                                        <FaSpinner className="spinner" />
                                        Creating Account...
                                    </>
                                ) : (
                                    'Sign Up'
                                )}
                            </button>
                        </form>

                        <div className="divider">
                            <span>or sign up with</span>
                        </div>


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