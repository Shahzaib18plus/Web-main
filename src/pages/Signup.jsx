import React from "react";
import Hero from "../components/Hero";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Signup = () => {
    return (
        <>
            <Hero />
            <Header />
            <div className="container auth-container">
                <div className="row justify-content-center">
                    <div className="col-md-6 col-lg-5">
                        <div className="auth-form-container">
                            <h2 className="auth-title">Create an Account</h2>
                            <form className="auth-form">
                                <div className="mb-3">
                                    <label htmlFor="fullname" className="form-label">Full Name</label>
                                    <div className="input-group">
                                        <span className="input-group-text"><i className="fas fa-user"></i></span>
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            id="fullname" 
                                            placeholder="Enter your full name" 
                                            required 
                                            pattern="^[a-zA-Z\s]+$" 
                                            title="Full name should only contain letters and spaces"
                                        />
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email address</label>
                                    <div className="input-group">
                                        <span className="input-group-text"><i className="fas fa-envelope"></i></span>
                                        <input 
                                            type="email" 
                                            className="form-control" 
                                            id="email" 
                                            placeholder="Enter your email" 
                                            required 
                                            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" 
                                            title="Please enter a valid email address"
                                        />
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="phone" className="form-label">Phone Number</label>
                                    <div className="input-group">
                                        <span className="input-group-text"><i className="fas fa-phone"></i></span>
                                        <input 
                                            type="tel" 
                                            className="form-control" 
                                            id="phone" 
                                            placeholder="Enter your phone number" 
                                            required 
                                            pattern="^\+?[0-9]{10,15}$" 
                                            title="Phone number should be 10-15 digits and can start with +"
                                        />
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <div className="input-group">
                                        <span className="input-group-text"><i className="fas fa-lock"></i></span>
                                        <input 
                                            type="password" 
                                            className="form-control" 
                                            id="password" 
                                            placeholder="Create a password" 
                                            required 
                                            minLength="6" 
                                            title="Password must be at least 6 characters long"
                                        />
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="confirm-password" className="form-label">Confirm Password</label>
                                    <div className="input-group">
                                        <span className="input-group-text"><i className="fas fa-lock"></i></span>
                                        <input 
                                            type="password" 
                                            className="form-control" 
                                            id="confirm-password" 
                                            placeholder="Confirm your password" 
                                            required 
                                            minLength="6" 
                                            title="Passwords must match"
                                        />
                                    </div>
                                </div>
                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="terms" required />
                                    <label className="form-check-label" htmlFor="terms">I agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a></label>
                                </div>
                                <button type="submit" className="btn btn-dark w-100">Sign Up</button>
                            </form>
                            <div className="mt-4 text-center">
                                <p>Already have an account? <a href="/login" className="login-link">Login</a></p>
                            </div>
                            <div className="social-login">
                                <p>Or sign up with</p>
                                <div className="social-buttons">
                                    <button className="btn btn-outline-dark social-btn">
                                        <i className="fab fa-facebook-f"></i>
                                    </button>
                                    <button className="btn btn-outline-dark social-btn">
                                        <i className="fab fa-google"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Signup;
