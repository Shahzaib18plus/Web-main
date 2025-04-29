import React from "react";
import Hero from "../components/Hero";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Login = () => {
    return (
        <>
            <Hero />
            <Header />
            <div className="container auth-container">
                <div className="row justify-content-center">
                    <div className="col-md-6 col-lg-5">
                        <div className="auth-form-container">
                            <h2 className="auth-title">Login to Your Account</h2>
                            <form className="auth-form">
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
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <div className="input-group">
                                        <span className="input-group-text"><i className="fas fa-lock"></i></span>
                                        <input 
                                            type="password" 
                                            className="form-control" 
                                            id="password" 
                                            placeholder="Enter your password" 
                                            required 
                                            minLength="6" 
                                            title="Password must be at least 6 characters long"
                                        />
                                    </div>
                                    <div className="form-text text-end">
                                        <a href="#" className="forgot-password">Forgot password?</a>
                                    </div>
                                </div>
                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="remember" />
                                    <label className="form-check-label" htmlFor="remember">Remember me</label>
                                </div>
                                <button type="submit" className="btn btn-dark w-100">Login</button>
                            </form>
                            <div className="mt-4 text-center">
                                <p>Don't have an account? <a href="/signup" className="signup-link">Sign up</a></p>
                            </div>
                            <div className="social-login">
                                <p>Or login with</p>
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

export default Login;
