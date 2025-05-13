import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Hero from "../components/Hero";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
    const [form, setForm] = useState({ email: "", password: "" });
    const [errorMsg, setErrorMsg] = useState("");
    const [successMsg, setSuccessMsg] = useState(""); // <-- Add success message state
    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMsg("");
        setSuccessMsg("");
        try {
            await signInWithEmailAndPassword(auth, form.email, form.password);
            setSuccessMsg("Login successful! Redirecting..."); // <-- Show success message
            setTimeout(() => {
                navigate("/"); // Redirect after short delay
            }, 1500);
        } catch (error) {
            setErrorMsg("Invalid email or password.");
        }
    };

    return (
        <>
            <Hero />
            <Header />
            <div className="container auth-container">
                <div className="row justify-content-center">
                    <div className="col-md-6 col-lg-5">
                        <div className="auth-form-container">
                            <h2 className="auth-title">Login to Your Account</h2>
                            {errorMsg && (
                                <div className="alert alert-danger text-center">{errorMsg}</div>
                            )}
                            {successMsg && (
                                <div className="alert alert-success text-center">{successMsg}</div>
                            )}
                            <form className="auth-form" onSubmit={handleSubmit}>
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
                                           pattern="^[a-zA-Z0-9._%+\-]+@(gmail|hotmail|yahoo)\.com$"
                                            title="Only Gmail, Hotmail, or Yahoo email addresses are allowed"
                                            value={form.email}
                                            onChange={handleChange}
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
                                            value={form.password}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="form-text text-end">
                                        <Link to="/forgot-password" className="forgot-password">Forgot password?</Link>
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
                                    <button className="btn btn-outline-dark social-btn" type="button">
                                        <i className="fab fa-facebook-f"></i>
                                    </button>
                                    <button className="btn btn-outline-dark social-btn" type="button">
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